export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  // Observe all elements that should animate on scroll
  const animateElements = document.querySelectorAll(
    ".scroll-animate, .services-intro, .service-card"
  );
  animateElements.forEach((element) => observer.observe(element));
};
