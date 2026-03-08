import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { MapView } from '@/components/Map';
import SpiralAnimation from '@/components/SpiralAnimation';

/**
 * Design Philosophy: Modern Elegance with Dynamic Energy
 * - Vibrant purple (#6B4C9A) and gold (#D4A574) color scheme
 * - Clean, minimalist layout with ample whitespace
 * - Smooth animations and transitions throughout
 * - Community-focused, welcoming visual language
 */

export default function Home() {
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  const classes = [
    {
      id: 'belly-dance',
      name: 'Belly Dance',
      description: 'Explore the art of belly dance with our experienced instructors. Perfect for all ages and skill levels.',
      schedule: 'Mon & Wed: 7:00 PM - 8:30 PM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/classes-banner-UriUGAZkCK4brBWj6kT6r9.webp'
    },
    {
      id: 'hip-hop',
      name: 'Hip Hop',
      description: 'High-energy hip hop classes for all levels. Learn contemporary moves and express yourself through dance.',
      schedule: 'Tue & Thu: 6:00 PM - 7:30 PM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/classes-banner-UriUGAZkCK4brBWj6kT6r9.webp'
    },
    {
      id: 'contemporary',
      name: 'Contemporary',
      description: 'Modern contemporary dance focusing on expression, technique, and artistic movement.',
      schedule: 'Sat: 10:00 AM - 11:30 AM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/about-section-MMfmQKV9GYiRWQRV.webp'
    },
    {
      id: 'latin',
      name: 'Latin Dance',
      description: 'Feel the rhythm with salsa, merengue, and other Latin dance styles. Fun and energetic classes.',
      schedule: 'Wed & Fri: 8:00 PM - 9:30 PM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/classes-banner-UriUGAZkCK4brBWj6kT6r9.webp'
    },
    {
      id: 'kids',
      name: 'Kids Classes',
      description: 'Fun and engaging dance classes for children aged 4-12. Build confidence and coordination.',
      schedule: 'Sat & Sun: 2:00 PM - 3:30 PM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/classes-banner-UriUGAZkCK4brBWj6kT6r9.webp'
    },
    {
      id: 'breakdance',
      name: 'Breakdance',
      description: 'Learn the fundamentals of breakdancing with professional instructors. All levels welcome.',
      schedule: 'Mon & Thu: 7:00 PM - 8:30 PM',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/hero-dance-studio-9yvcCXUaF47qJYFo4rXjwZ.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl text-[#6B4C9A]">HODS</div>
          <div className="flex gap-8 items-center">
            <a href="#classes" className="text-[#1A1A1A] hover:text-[#6B4C9A] transition-colors duration-300">Classes</a>
            <a href="#about" className="text-[#1A1A1A] hover:text-[#6B4C9A] transition-colors duration-300">About</a>
            <a href="#contact" className="text-[#1A1A1A] hover:text-[#6B4C9A] transition-colors duration-300">Contact</a>
            <a href="tel:+35770000174" className="btn-primary text-sm">Call Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-[#6B4C9A] to-[#1A1A1A]">
        {/* Spiral Animation Background */}
        <div className="absolute inset-0 z-0">
          <SpiralAnimation />
        </div>

        {/* Hero Image with Overlay */}
        <div className="absolute inset-0 z-1">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/hero-dance-studio-FhwXCj4EiezedCeBBXHx6x.png"
            alt="Dance Studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-6xl md:text-7xl mb-4">House of Dance Strofes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience the art of dance. Join our community of passionate dancers in Limassol, Cyprus.</p>
          <a href="#classes" className="btn-primary inline-block">Explore Classes</a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl mb-4 text-[#6B4C9A]">Our Classes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover a variety of dance styles taught by experienced choreographers and teachers. From belly dance to breakdance, we have something for everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedClass(expandedClass === cls.id ? null : cls.id)}
              >
                <img src={cls.image} alt={cls.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-[#6B4C9A] mb-2">{cls.name}</h3>
                  <p className="text-gray-600 mb-4">{cls.description}</p>
                  <div className="flex items-center text-[#D4A574] mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cls.schedule}</span>
                  </div>
                  {expandedClass === cls.id && (
                    <button className="btn-secondary w-full text-sm">Enroll Now</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-divider"></div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl mb-6 text-[#6B4C9A]">About Us</h2>
              <p className="text-lg text-gray-700 mb-4">
                House of Dance Strofes is a premier dance school in Limassol, Cyprus, dedicated to providing high-quality dance instruction from experienced choreographers and teachers. We believe that dance is a universal language that brings people together and expresses the deepest emotions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to create a welcoming community where dancers of all ages and skill levels can learn, grow, and express themselves through movement. Whether you're a beginner or an advanced dancer, we have classes tailored to your needs.
              </p>
              <p className="text-lg text-gray-700">
                Join us and discover the joy of dance. Feel the beat, move with passion, and become part of our vibrant dance family.
              </p>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385951370/BWzvzfdPPTqeGk93hwi5jz/about-section-MMfmQKV9GYiRWQRV.webp"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl mb-16 text-center text-[#6B4C9A]">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-[#6B4C9A] mb-2">Location</h3>
                  <p className="text-gray-700">Karpenisiou 23, Limassol 4003, Cyprus</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-[#6B4C9A] mb-2">Phone</h3>
                  <a href="tel:+35770000174" className="text-gray-700 hover:text-[#6B4C9A] transition-colors duration-300">
                    +357 70 000174
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-[#6B4C9A] mb-2">Email</h3>
                  <a href="mailto:mariapapargyrou@gmail.com" className="text-gray-700 hover:text-[#6B4C9A] transition-colors duration-300">
                    mariapapargyrou@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-[#6B4C9A] mb-2">Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 4:00 PM - 9:30 PM</p>
                  <p className="text-gray-700">Saturday - Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <MapView
                initialCenter={{ lat: 34.700245, lng: 33.0472292 }}
                initialZoom={16}
                onMapReady={(map: google.maps.Map) => {
                  // Add marker for the dance studio location
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: 34.700245, lng: 33.0472292 },
                    title: 'House of Dance Strofes - Karpenisiou 23',
                  });
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B4C9A] text-white py-8">
        <div className="container text-center">
          <p className="mb-2">&copy; 2026 House of Dance Strofes. All rights reserved.</p>
          <p className="text-sm text-gray-300">Karpenisiou 23, Limassol 4003, Cyprus | +357 70 000174</p>
        </div>
      </footer>
    </div>
  );
}
