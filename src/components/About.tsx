import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Projects Completed', value: '100+' },
    { icon: Clock, label: 'On-Time Delivery', value: '98%' },
    { icon: Shield, label: 'Safety Record', value: '100%' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Shintre Construction</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through quality craftsmanship and unwavering dedication to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2009 by Mangesh Shintre, Shintre Construction began as a small family business with a simple mission: to build structures that last and relationships that endure. What started with residential renovations has grown into a full-service construction company serving clients across the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to quality, transparency, and customer satisfaction has earned us the trust of homeowners, businesses, and government agencies alike. Every project, whether big or small, receives the same attention to detail and dedication to excellence.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To provide reliable, affordable, and high-quality construction solutions while building lasting relationships with our clients through trust, integrity, and exceptional service.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Shintre Construction?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">We use only the finest materials and proven construction methods to ensure lasting results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Timely Delivery</h4>
              <p className="text-gray-600 text-sm">Our efficient project management ensures your project is completed on time and within budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personal Service</h4>
              <p className="text-gray-600 text-sm">We work closely with each client to understand their vision and bring it to life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;