const fetchJobsData = async () => {
  try {
    const response = await fetch('http://localhost:8000/get-jobs');
    if (!response.ok) {
      throw new Error('Failed to fetch job data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching job data:', error);
    return {
      IT: { companies: [] },
      NonIT: { companies: [] }
    };
  }
};
export default fetchJobsData;