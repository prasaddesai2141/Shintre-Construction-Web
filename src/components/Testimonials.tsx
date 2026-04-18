import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257005181_26a3ee13.webp',
      rating: 5,
      text: 'Shintre Construction built our dream home exactly as we envisioned. Their attention to detail and commitment to quality is outstanding. The project was completed on time and within budget.',
      project: 'Custom Villa - Pune'
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      role: 'Business Owner',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257006937_abdb5ec7.webp',
      rating: 5,
      text: 'We hired Shintre Construction for our office building project. Their professionalism and expertise made the entire process smooth. Highly recommend them for commercial projects.',
      project: 'Office Complex - Mumbai'
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Property Developer',
      image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257008774_42e271e5.webp',
      rating: 5,
      text: 'Working with Shintre Construction on multiple residential projects has been a pleasure. They deliver quality work consistently and maintain excellent communication throughout.',
      project: 'Residential Complex - Nagpur'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience with Shintre Construction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="text-sm text-blue-600 font-medium">
                Project: {testimonial.project}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Experience the Shintre Construction difference. From initial consultation to project completion, we're committed to exceeding your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </button>
            <a
              href="tel:+91 96375 04588"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;