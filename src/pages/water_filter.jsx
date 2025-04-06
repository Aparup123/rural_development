import React, { useState, useEffect } from 'react';
import WaterFilterImage from "../assets/images/water_filter.png";
import MaterialsImage from "../assets/images/filter_materials.jpeg"; // Assuming you'll add this image
import { DownloadIcon, ArrowRightIcon } from 'lucide-react'; // Using lucide icons

const WaterFilter = () => {
  // State for tracking scroll position for animations
  const [isVisible, setIsVisible] = useState({
    materials: false,
    steps: false,
    video: false
  });

  // Handle intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Downloadable content handler
  const handleDownload = () => {
    // In a real app, this would trigger a file download
    console.log("Downloading instructions PDF");
    alert("Download started! (This would be a real download in production)");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section - Enhanced with better contrast and accessibility */}
      
      {/* Main Content - Enhanced with animations and better visual hierarchy */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">How to Build Your Homemade Water Filter</h2>
        
        {/* Materials Section */}
        <div id="materials" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-on-scroll">
          <div className={`transition-all duration-700 ${isVisible.materials ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
              Materials You'll Need:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-600 pl-4">
              <li>A large plastic bottle (2-liter soda bottle works well)</li>
              <li>Clean sand (both coarse and fine grain varieties)</li>
              <li>Activated charcoal (can be purchased or made from wood)</li>
              <li>Small and medium-sized gravel or pebbles</li>
              <li>Clean cotton cloth or coffee filter</li>
              <li>Scissors or utility knife</li>
              <li>Container to collect filtered water</li>
            </ul>
          </div>
          
          <div className={`relative rounded-lg overflow-hidden h-64 md:h-auto shadow-md transition-all duration-700 ${isVisible.materials ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src={MaterialsImage || "/api/placeholder/600/400"} 
              alt="Water filter materials including bottle, sand, charcoal and gravel" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Instructions Section - Enhanced with better visual hierarchy */}
        <div id="steps" className="animate-on-scroll mb-12">
          <h3 className={`text-xl font-semibold text-gray-700 mb-5 flex items-center transition-all duration-700 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
            Step-by-Step Instructions:
          </h3>
          <ol className="space-y-6 text-gray-600 mb-8">
            <li className={`p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 delay-100 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-medium text-lg text-gray-800 mb-2">Prepare the bottle</h4>
              <p>Cut the bottom off the plastic bottle. Turn it upside down (with the cap at the bottom) to create a funnel shape.</p>
            </li>
            <li className={`p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 delay-200 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-medium text-lg text-gray-800 mb-2">Create drainage</h4>
              <p>Remove the bottle cap and cut a small hole in it, or replace it with cloth secured by the cap ring to prevent materials from flowing out.</p>
            </li>
            <li className={`p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 delay-300 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-medium text-lg text-gray-800 mb-2">Add the filtering layers</h4>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>First layer: Cotton cloth or coffee filter at the bottom</li>
                <li>Second layer: Activated charcoal (1-2 inches)</li>
                <li>Third layer: Fine sand (2-3 inches)</li>
                <li>Fourth layer: Coarse sand (2-3 inches)</li>
                <li>Fifth layer: Small gravel (1-2 inches)</li>
                <li>Top layer: Medium-sized gravel (1-2 inches)</li>
              </ul>
            </li>
            <li className={`p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 delay-400 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-medium text-lg text-gray-800 mb-2">First use</h4>
              <p>Pour clean water through to wash away any dust or debris from the materials. Discard this first batch of filtered water.</p>
            </li>
            <li className={`p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 delay-500 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-medium text-lg text-gray-800 mb-2">Filter water</h4>
              <p>Place the filter over a clean container, and slowly pour water through the top. The water will filter through the layers and drip out the bottom.</p>
            </li>
          </ol>
        </div>
        
        {/* Important Note - Enhanced for visibility */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-12 rounded-r-lg shadow-sm">
          <p className="text-blue-800 font-medium">
            <strong className="text-lg block mb-1">⚠️ Important Safety Note</strong>
            This filter removes sediment and some contaminants but does not eliminate all bacteria or viruses. For complete purification, boil the filtered water for at least 1 minute (3 minutes at higher elevations) or use water purification tablets.
          </p>
        </div>
        
        {/* Video Tutorial - Enhanced with lazy loading and better positioning */}
        <div id="video" className="animate-on-scroll mb-12">
          <h3 className={`text-xl font-semibold text-gray-700 mb-5 flex items-center transition-all duration-700 ${isVisible.video ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
            Video Tutorial
          </h3>
          <div className={`relative w-full overflow-hidden shadow-lg rounded-lg transition-all duration-700 ${isVisible.video ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* 16:9 aspect ratio wrapper */}
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/IH-2HyTpmC0?si=1tx8MXThYb1-0Rz3" 
                title="How to Build a Homemade Water Filter"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* How It Works - Enhanced with visual elements */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
            How It Works
          </h3>
          <p className="text-gray-600 mb-6">
            Each layer of the filter serves a specific purpose in the water purification process:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-medium text-green-800 mb-2">Gravel Layers</h4>
              <p className="text-gray-600">Trap large particles, debris, and sediment, preventing them from clogging the finer materials below.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-medium text-yellow-800 mb-2">Sand Layers</h4>
              <p className="text-gray-600">Filter out smaller particles, some microorganisms, and help distribute water evenly through the filter.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-medium text-blue-800 mb-2">Activated Charcoal</h4>
              <p className="text-gray-600">Absorbs chemicals, odors, some toxins, and improves taste through adsorption.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-medium text-purple-800 mb-2">Cloth Layer</h4>
              <p className="text-gray-600">Prevents fine materials from flowing out and provides initial filtering of larger particles.</p>
            </div>
          </div>
        </div>
        
        {/* Download Button - Enhanced with animation */}
        <div className="flex justify-center">
          <button 
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            aria-label="Download printable instructions"
          >
            <span>Download Printable Instructions</span>
            <DownloadIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
      
      {/* Related Resources - Enhanced with better cards */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Related Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white">
            <img src="/api/placeholder/400/200" alt="Water purification methods" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Water Purification Methods</h3>
              <p className="text-gray-600">Learn additional ways to purify water in emergency situations when clean water isn't available.</p>
              <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">Read more →</a>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white">
            <img src="/api/placeholder/400/200" alt="Collecting rainwater" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Rainwater Collection Systems</h3>
              <p className="text-gray-600">How to build simple systems to collect and store rainwater for later filtration and use.</p>
              <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">Read more →</a>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white">
            <img src="/api/placeholder/400/200" alt="Emergency preparedness" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Emergency Water Storage</h3>
              <p className="text-gray-600">Best practices for storing water safely for emergency situations and natural disasters.</p>
              <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterFilter;