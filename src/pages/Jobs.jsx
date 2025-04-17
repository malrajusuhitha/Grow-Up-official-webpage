import React, { useState, useEffect, useRef } from 'react';
import fetchJobsData from '../jobsData';
import './Jobs.css';
import bannerImg from '../assets/banner.jpg';



const Jobs = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    location: '',
    experience: '',
    category: '',
  });

  const [reco, setReco] = useState([]);


  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [jobsData, setJobsData] = useState({ IT: { companies: [] }, NonIT: { companies: [] } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const recommendedRef = useRef(null);


  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobsData();
        setJobsData(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const allRoles = [
    ...jobsData.IT.companies.flatMap(company =>
      company.openings.map(job => ({
        ...job,
        company: company.name,
        industry: company.industry,
        logo: company.logo,
      }))
    ),
    ...jobsData.NonIT.companies.flatMap(company =>
      company.openings.map(job => ({
        ...job,
        company: company.name,
        industry: company.industry,
        logo: company.logo,
      }))
    ),
  ];

  const scrollToRecommended = () => {
    if (recommendedRef.current) {
      recommendedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const matchesSearch = (job) => {
    const keywordMatch =
      searchKeyword === '' ||
      job.role.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      (job.skills && job.skills.some(skill =>
        skill.toLowerCase().includes(searchKeyword.toLowerCase())
      ));

    const locationMatch =
      searchLocation === '' ||
      job.location.toLowerCase().includes(searchLocation.toLowerCase());

    return keywordMatch && locationMatch;
  };

  const matchesExperience = (job) => {
    if (!selectedFilters.experience) return true;

    const [min, max] = selectedFilters.experience.split('-');
    const fromExp = parseInt(job.from_experience || '0');
    const toExp = parseInt(job.to_experience || '100');

    if (max === '+') {
      return fromExp >= parseInt(min);
    }

    return fromExp <= parseInt(max) && toExp >= parseInt(min);
  };

  const applyFilters = (company) => {
    const { type, location, category } = selectedFilters;

    if (category === 'IT' && company.industry !== 'IT services') return false;
    if (category === 'Non-IT' && company.industry === 'IT services') return false;

    return company.openings.some(job => {
      return (
        (type.length === 0 || type.includes(job.type)) &&
        (location === '' || job.location === location) &&
        matchesExperience(job) &&
        matchesSearch({ ...job, company: company.name, industry: company.industry })
      );
    });
  };

  const renderCompanyCard = (company) => {
    const filteredRoles = company.openings.filter(job => {
      const { type, location } = selectedFilters;
      return (
        (type.length === 0 || type.includes(job.type)) &&
        (location === '' || job.location === location) &&
        matchesExperience(job) &&
        matchesSearch({ ...job, company: company.name })
      );
    });

    if (filteredRoles.length === 0) return null;

    return (
      <div className="company-card-modern" key={company.name}>
        <div className="company-header">
          <div>
            <div className="company-name">
              {company.name} <span className="role-count">({filteredRoles.length} opening{filteredRoles.length > 1 ? 's' : ''})</span>
            </div>
            <div className="company-industry">{company.industry}</div>
          </div>
        </div>
        <div className="role-cards">
          {filteredRoles.map((job, index) => (
            <div className="role-card" key={index}>
              <div className="job-role">{job.role}</div>
              <div className="job-info"><span className="bold">Experience:</span> {job.experience}</div>
              <div className="job-info"><span className="bold">Location:</span> {job.location}</div>
              <div className="job-info"><span className="bold">Salary:</span> {job.salary}</div>
              <div className="job-info"><span className="bold">Type:</span> {job.type}</div>
              <button
                className="apply-btn"
                onClick={() => {
                  const query = `${job.role} ${company.name}`.replace(/\s+/g, '-').toLowerCase();
                  window.open(`https://www.naukri.com/${query}-jobs`, '_blank');
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleJobTypeChange = (e) => {
    const value = e.target.value;
    setSelectedFilters(prev => {
      const updatedType = prev.type.includes(value)
        ? prev.type.filter(item => item !== value)
        : [...prev.type, value];
      return { ...prev, type: updatedType };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      type: [],
      location: '',
      experience: '',
      category: '',
    });
    setSearchKeyword('');
    setSearchLocation('');
  };

  if (loading) return <div className="loading">Loading jobs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="jobs-page">
      {/* Left Sidebar Filters */}
      <div className="left-sidebar">
        <div className="filters-header">
          <h3>Filters</h3>
          <button className="clear-all-btn" onClick={clearAllFilters}>Clear All</button>
        </div>

        {/* Upload Resume Section */}
        

        {/* Category Filter */}
        <div className="filter-group">
          <label>Category</label>
          <label>
            <input
              type="radio"
              name="category"
              value="IT"
              checked={selectedFilters.category === 'IT'}
              onChange={(e) => setSelectedFilters({ ...selectedFilters, category: e.target.value })}
            />
            IT
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Non-IT"
              checked={selectedFilters.category === 'Non-IT'}
              onChange={(e) => setSelectedFilters({ ...selectedFilters, category: e.target.value })}
            />
            Non-IT
          </label>
        </div>

        {/* Job Type Filter */}
        <div className="filter-group">
          <label>Job Type</label>
          {['Full-time', 'Part-time', 'Remote', 'Internship', 'Contract'].map(type => (
            <label key={type}>
              <input
                type="radio"
                name="jobType"
                value={type}
                checked={selectedFilters.type[0] === type}
                onChange={(e) => setSelectedFilters({ ...selectedFilters, type: [e.target.value] })}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Location Filter */}
        <div className="filter-group">
          <label>Location</label>
          <select
            value={selectedFilters.location}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
          >
            <option value="">Any</option>
            {['Hyderabad', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Pune'].map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div className="filter-group">
          <label>Experience</label>
          <select
            value={selectedFilters.experience}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, experience: e.target.value })}
          >
            <option value="">Any</option>
            {['0.0-1.0 ', '1.0-3.0 ', '3.0-5.0 ', '6.0-8.0', '8.0-10.0 ', '10+'].map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search Hero Section */}
        <div className="hero-search-banner" >
          <div className="hero-text">
            <h2>Find your dream opportunity</h2>
            <p>Search by role, keyword or location to discover jobs you love.</p>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Job title, Company or any Keyword"
              className="search-input"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="search-input"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button className="search-button">Find Jobs</button>
            <button className="recommended-button" onClick={scrollToRecommended}>View Recommended Jobs</button>
            </div>
            <dev className="hero-text">
            <p>Upload your Resume to get recommendations</p>
            </dev>
            {/* <h2 style={{ color: 'black', background: 'white' }}>Upload your Resume to get recommendations</h2> */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const fileInput = document.getElementById('pdfFile');
              const file = fileInput.files[0];
              const formData = new FormData();
              formData.append('file', file);

              const loadingContainer = document.getElementById('loadingBarContainer');
              const loadingBar = document.getElementById('loadingBar');
              const statusText = document.getElementById('uploadStatus');

              // Reset states
              loadingContainer.style.display = 'block';
              loadingBar.style.width = '0%';
              statusText.textContent = '';

              // Simulate progress bar growth
              let progress = 0;
              const progressInterval = setInterval(() => {
                if (progress < 90) {
                  progress += 10;
                  loadingBar.style.width = `${progress}%`;
                  loadingBar.style.color = 'white';
                }
              }, 200);

              try {
                const response = await fetch('http://localhost:8000/resume_upload', {
                  method: 'POST',
                  body: formData,
                });
                const result = await response.json();

                clearInterval(progressInterval);
                loadingBar.style.width = '100%';
                loadingBar.style.color = 'white';

                setReco(result);
                statusText.textContent = result.message || 'Upload successful!';
                statusText.style.color = 'yellow';
                statusText.style.fontSize = '14px';
              } catch (error) {
                clearInterval(progressInterval);
                loadingBar.style.width = '100%';
                statusText.textContent = 'Upload failed!';
                statusText.style.color = 'red';
              }

              // Hide loading bar after short delay
              setTimeout(() => {
                loadingContainer.style.display = 'none';
                loadingBar.style.width = '0%';
                loadingBar.style.color = 'white';
              }, 1000);
            }}

          >
            <input type="file" id="pdfFile" accept="application/pdf" required />
            <button type="submit" style={{ marginLeft: '16px' }}>Upload</button>
          </form>
          <div id="loadingBarContainer" style={{ width: '100%', height: '6px', backgroundColor: 'white', display: 'none', borderRadius: '4px', overflow: 'hidden', marginTop: '12px', zIndex: '2' }}>
            <div id="loadingBar" style={{ height: '100%', width: '0%', backgroundColor: 'blue', transition: 'width 0.3s ease' }}></div>
          </div>
          <p id="uploadStatus" style={{ marginTop: '-30px' }}></p>
        </div>
        {/* Recommended Section */}
        <div className="recommended-section" ref={recommendedRef}>
          <div className="recommended-cards">
            {reco.map((rec, index) => (
              <div className="recommended-card modern" key={index}>
                <h3 className="recommended-company">{rec.company}</h3>
                <p className="recommended-role">{rec.role}</p>
                <div className="recommended-tags">
                  <span className="tag">
                    {rec.experience_match ? "Experience Matched" : "Experience Not Matched"}
                  </span>
                  <span className="tag">
                    {rec.location_match ? "Location Matched" : "Location Not Matched"}
                  </span>
                </div>

                <button
                  className="view-job-btn"
                  onClick={() => {
                    const query = `${rec.role} ${rec.company}`.replace(/\s+/g, '-').toLowerCase();
                    window.open(`https://www.naukri.com/${query}-jobs`, '_blank');
                  }}
                >
                  View Job
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          {[...jobsData.IT.companies, ...jobsData.NonIT.companies]
            .filter(applyFilters)
            .map(renderCompanyCard)}
        </div>

        



      </div>
    </div>
  );
};

export default Jobs;
