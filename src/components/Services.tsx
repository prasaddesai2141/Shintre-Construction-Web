import React from 'react';
import { Home, Construction, Building, Wrench, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, villas, and residential complexes built to your specifications with attention to every detail.',
      features: ['Custom Home Design', 'Villa Construction', 'Residential Complexes', 'Interior Finishing']
    },
    {
      icon: Construction,
      title: 'Road Construction',
      description: 'Professional road construction and infrastructure development for municipalities and private developments.',
      features: ['Highway Construction', 'Street Paving', 'Drainage Systems', 'Traffic Infrastructure']
    },
    {
      icon: Building,
      title: 'Commercial & Industrial',
      description: 'Office buildings, warehouses, and industrial facilities designed for efficiency and durability.',
      features: ['Office Buildings', 'Warehouses', 'Manufacturing Facilities', 'Retail Spaces']
    },
    {
      icon: Wrench,
      title: 'Renovation & Repair',
      description: 'Transform existing spaces with our comprehensive renovation and repair services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Structural Repairs', 'Building Maintenance']
    },
    {
      icon: Layers,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including utilities, foundations, and site preparation.',
      features: ['Site Preparation', 'Foundation Work', 'Utility Installation', 'Landscaping']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions for residential, commercial, and infrastructure projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6">
              Every project is unique. Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;