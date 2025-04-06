import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle, Droplets, Shield, Award, Gift, ArrowRight } from 'lucide-react';
import ProductImage1 from '../assets/images/product1.jpg';
import ProductImage2 from '../assets/images/product2.jpg';
import ProductImage3 from '../assets/images/product3.jpg';
import Headshot1 from '../assets/images/HeadShot1.jpg';
import Headshot2 from '../assets/images/HeadShot2.jpg';
import Headshot3 from '../assets/images/HeadShot3.jpg';
const WaterQualityDevice = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isInView, setIsInView] = useState({});
  const featuresRef = useRef(null);
  
  // Product details
  const product = {
    name: "AquaTest Pro",
    tagline: "Accurate Water Quality Testing for Rural Communities",
    price: 149.99,
    discountPrice: 129.99,
    rating: 4.8,
    reviewCount: 267,
    description: "The AquaTest Pro is a reliable, easy-to-use water quality testing device designed specifically for rural communities. It measures key parameters including pH, TDS, turbidity, and detects common contaminants with laboratory-grade accuracy at an affordable price.",
    images: [
      ProductImage1,
      ProductImage2,
      ProductImage3
    ],
    features: [
      { title: "7-in-1 Testing", description: "Tests pH, TDS, turbidity, chlorine, lead, bacteria indicators, and nitrates" },
      { title: "Solar Powered", description: "Built-in solar panel allows for operation in areas with limited electricity" },
      { title: "Simple to Use", description: "Clear LED display with intuitive controls, no technical expertise required" },
      { title: "Fast Results", description: "Get accurate readings in under 60 seconds" },
      { title: "Durable Design", description: "Weatherproof construction for field use in any environment" },
      { title: "Data Storage", description: "Stores up to 100 test results for tracking water quality over time" }
    ],
    benefits: [
      "Prevent waterborne illnesses by identifying contaminated water sources",
      "Make informed decisions about water treatment needs",
      "Reduce healthcare costs associated with poor water quality",
      "Simple enough for anyone in the community to use",
      "More affordable than lab testing with comparable accuracy",
      "Avoid unnecessary water treatment when water is already safe"
    ],
    specifications: {
      dimensions: "6 × 3 × 1.5 inches",
      weight: "8.5 oz (240g)",
      battery: "Rechargeable lithium-ion + solar",
      batteryLife: "Up to 200 tests per charge",
      accuracy: {
        ph: "±0.1 pH",
        tds: "±2% reading",
        turbidity: "±5% reading"
      },
      waterproof: "IP67 rated",
      displayType: "Backlit LCD",
      warranty: "2-year manufacturer warranty"
    },
    included: [
      "AquaTest Pro device",
      "Carrying case",
      "User manual",
      "Calibration solution",
      "USB charging cable",
      "Quick start guide",
      "Testing strips (50pk)"
    ]
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-trigger').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.scroll-trigger').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-28 md:pb-44">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium tracking-wide">
                  Empowering Rural Communities
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-blue-100">
                  {product.tagline}
                </p>
                <p className="text-lg text-blue-100 max-w-lg">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={scrollToFeatures}
                    className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center transition-all shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium flex items-center transition-all shadow-lg hover:shadow-xl">
                    Order Now
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>{product.rating} stars ({product.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="relative  overflow-hidden shadow-2xl">
                <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-3 py-1 font-bold text-sm shadow-md">
                  SAVE {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                </div>
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div id="benefits" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-trigger">
        <div className={`transition-all duration-1000 ${isInView.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Rural Communities Choose AquaTest Pro</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Clean water is essential for health and prosperity. Our device empowers communities to test and monitor their water quality with professional accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Health Protection</h3>
              <p className="text-gray-600">
                Detect harmful contaminants before they cause illness. Proactively monitor water sources used for drinking, cooking, and bathing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Self-Reliance</h3>
              <p className="text-gray-600">
                No need to send samples to distant laboratories. Get immediate results you can trust right in your community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainable Solution</h3>
              <p className="text-gray-600">
                Solar-powered with reusable testing components minimizes ongoing costs and environmental impact while maximizing utility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div ref={featuresRef} id="product-details" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 ">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`py-4 px-3 border-b-2 font-medium text-lg ${
                    activeTab === 'features'
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'text-gray-200'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`py-4 px-3 border-b-2 font-medium text-lg ${
                    activeTab === 'specs'
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'text-gray-200'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('whats-included')}
                  className={`py-4 px-3 border-b-2 font-medium text-lg ${
                    activeTab === 'whats-included'
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'text-gray-200'
                  }`}
                >
                  What's Included
                </button>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img 
                    src={product.images[1]}
                    alt="AquaTest Pro in use" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                  <ul className="space-y-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                        <div>
                          <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img 
                    src={product.images[2]}
                    alt="AquaTest Pro device details" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-medium">{product.specifications.dimensions}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium">{product.specifications.weight}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Battery</p>
                      <p className="font-medium">{product.specifications.battery}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Battery Life</p>
                      <p className="font-medium">{product.specifications.batteryLife}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Accuracy</p>
                      <p className="font-medium">pH: {product.specifications.accuracy.ph}</p>
                      <p className="font-medium">TDS: {product.specifications.accuracy.tds}</p>
                      <p className="font-medium">Turbidity: {product.specifications.accuracy.turbidity}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Waterproof Rating</p>
                      <p className="font-medium">{product.specifications.waterproof}</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">Display</p>
                      <p className="font-medium">{product.specifications.displayType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Warranty</p>
                      <p className="font-medium">{product.specifications.warranty}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'whats-included' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img 
                    src={product.images[0]}
                    alt="AquaTest Pro package contents" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">What's in the Box</h3>
                  <ul className="space-y-4">
                    {product.included.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Gift className="h-5 w-5 text-blue-500 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Special Offer</h4>
                    <p className="text-blue-700">
                      Purchase for community programs and receive additional testing strips and training materials at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-gray-50 scroll-trigger">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isInView.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Trusted by Rural Communities</h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from community leaders who have improved water safety with AquaTest Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                "
              </div>
              <p className="text-gray-600 mb-4">
                "The AquaTest Pro has been a game-changer for our village. We discovered our well water had unsafe nitrate levels that we wouldn't have known about otherwise. Now we can ensure our water is safe for everyone."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 bg-gray-300 rounded-full">
                  <img src={Headshot2} alt="Priya Sharma" className="rounded-full" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm">Village Council Leader, Rajasthan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                "
              </div>
              <p className="text-gray-600 mb-4">
                "As a community health worker, I use the AquaTest Pro during home visits. It's simple to use and helps me educate families about water safety. The solar charging is perfect for our remote location."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 bg-gray-300 rounded-full">
                  <img src={Headshot1} alt="Rakesh Dalpati" className="rounded-full" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Rakesh Dalpati</h4>
                  <p className="text-gray-500 text-sm">Community Health Worker,UP,India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                "
              </div>
              <p className="text-gray-600 mb-4">
                "Our farming cooperative invested in the AquaTest Pro to monitor irrigation water quality. It's paid for itself by helping us optimize our water treatment processes and improve crop yields."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 bg-gray-300 rounded-full">
                  <img src={Headshot3} alt="Kwame Addo" className="rounded-full" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Kwame Addo</h4>
                  <p className="text-gray-500 text-sm">Farming Cooperative Leader, Assam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to ensure clean water for your community?</span>
              <span className="block text-blue-200">Limited-time special pricing for rural development programs.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-all">
                  Order Now
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
              <div className="ml-4 inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-all">
                  Contact For Bulk Orders
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="py-16 bg-white scroll-trigger">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isInView.faqs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900">How accurate is the AquaTest Pro compared to laboratory testing?</h3>
              <p className="mt-2 text-gray-600">
                The AquaTest Pro provides 95-98% accuracy compared to standard laboratory testing methods for the parameters it measures. While professional labs may use more specialized equipment, our device offers reliable results suitable for regular monitoring and initial screening.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900">Is training required to use the device?</h3>
              <p className="mt-2 text-gray-600">
                The AquaTest Pro is designed to be used with minimal training. The included quick start guide provides clear instructions, and most users can begin testing within minutes. For community programs, we offer free online training sessions.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900">How often do I need to replace testing supplies?</h3>
              <p className="mt-2 text-gray-600">
                The device comes with 50 testing strips. Depending on your testing frequency, these may last 3-6 months. Replacement strips can be purchased in packs of 100. The device itself does not require replacement parts other than occasional calibration solution.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900">Is technical support available?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we provide technical support via email, phone, and WhatsApp. For rural areas with limited connectivity, we have an offline help guide included with the device and can arrange call-back support at convenient times.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for community programs or bulk orders?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer tiered pricing for bulk orders and special packages for NGOs, government programs, and community initiatives. Please contact our team for customized quotations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Start protecting your community's water today
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of rural communities worldwide who are taking control of their water safety with AquaTest Pro.
            </p>
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all">
                Order Your AquaTest Pro
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Free shipping on orders over ₹400 • 60-day money-back guarantee • 2-year warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterQualityDevice;