import { useEffect } from 'react';
import { initGA, trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics if measurement ID is provided
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
      console.log('✅ Google Analytics initialized');
    } else {
      console.log('⚠️ Google Analytics not configured. Add VITE_GA_MEASUREMENT_ID to .env file');
    }

    // Track initial page view
    trackPageView(window.location.pathname);

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track scroll milestones (25%, 50%, 75%, 100%)
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent < 50 && maxScroll < 50) {
          trackScrollDepth(25);
        } else if (scrollPercent >= 50 && scrollPercent < 75 && maxScroll < 75) {
          trackScrollDepth(50);
        } else if (scrollPercent >= 75 && scrollPercent < 100 && maxScroll < 100) {
          trackScrollDepth(75);
        } else if (scrollPercent >= 100) {
          trackScrollDepth(100);
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};