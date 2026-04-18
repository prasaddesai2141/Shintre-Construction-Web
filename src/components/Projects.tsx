import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Complex',
      location: 'Pune, Maharashtra',
      category: 'Residential',
      year: '2023',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256981323_84514ac7.webp',
      description: 'Modern 4-bedroom villas with contemporary design and premium finishes.'
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      location: 'Mumbai, Maharashtra',
      category: 'Commercial',
      year: '2023',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256987453_7e5fe566.webp',
      description: '15-story office building with modern amenities and sustainable design.'
    },
    {
      id: 3,
      title: 'Highway Extension Project',
      location: 'Nashik-Pune Highway',
      category: 'Infrastructure',
      year: '2022',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256992055_d8781eb2.webp',
      description: '25km highway extension with modern drainage and safety features.'
    },
    {
      id: 4,
      title: 'Residential Apartments',
      location: 'Nagpur, Maharashtra',
      category: 'Residential',
      year: '2023',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256983095_53d8859a.webp',
      description: '120-unit apartment complex with recreational facilities and parking.'
    },
    {
      id: 5,
      title: 'Manufacturing Facility',
      location: 'Aurangabad, Maharashtra',
      category: 'Industrial',
      year: '2022',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256989482_cef5ce4d.webp',
      description: 'State-of-the-art manufacturing facility with modern infrastructure.'
    },
    {
      id: 6,
      title: 'Heritage Home Renovation',
      location: 'Kolhapur, Maharashtra',
      category: 'Renovation',
      year: '2023',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257002631_51dfde58.webp',
      description: 'Complete renovation of 100-year-old heritage home preserving original character.'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through completed projects across various sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;