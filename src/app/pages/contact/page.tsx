'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const ContactUs = () => {
  // State to handle form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tourType: '',
    travelDate: '',
  });
  const [status, setStatus] = useState('');

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.tourType || !formData.travelDate) {
      setStatus('Please fill in all required fields.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      tourType: formData.tourType,
      travelDate: formData.travelDate,
    };

    // Send email using EmailJS service
    emailjs
      .send(
        'service_yourServiceID', // Replace with your Service ID from EmailJS
        'template_yourTemplateID', // Replace with your Template ID from EmailJS
        templateParams,
        'user_yourUserID' // Replace with your User ID from EmailJS
      )
      .then(
        (response) => {
          setStatus('Your message has been sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '', tourType: '', travelDate: '' }); // Reset form
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Contact Us" subHeading="Contact Us" />
      </div>
      <div className="contact-us py-10 md:py-20">
        <div className="container">
          <div className="flex justify-between max-lg:flex-col gap-y-10">
            <div className="left lg:w-2/3 lg:pr-4">
              <div className="heading3">Drop Us A Line</div>
              <div className="body1 text-secondary2 mt-3">
                Use the form below to get in touch with us. We&apos;ll be happy to answer your travel inquiries.
              </div>


              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5">
                  <div className="name">
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      name="name"
                      type="text"
                      value={formData.name}
                      placeholder="Your Name *"
                      required
                      onChange={handleChange}
                      aria-label="Your Name"
                    />
                  </div>
                  <div className="email">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      name="email"
                      type="email"
                      value={formData.email}
                      placeholder="Your Email *"
                      required
                      onChange={handleChange}
                      aria-label="Your Email"
                    />
                  </div>
                  <div className="phone">
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      placeholder="Your Phone (Optional)"
                      onChange={handleChange}
                      aria-label="Your Phone (Optional)"
                    />
                  </div>
                  <div className="tourType">
                    <select
                      className="border-line px-4 py-3 w-full rounded-lg"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      required
                      aria-label="Select Tour Type"
                    >
                      <option value="">Select Tour Type *</option>
                      <option value="Cultural Tour">Cultural Tour</option>
                      <option value="Adventure Tour">Adventure Tour</option>
                      <option value="Luxury Tour">Luxury Tour</option>
                      <option value="Family Tour">Family Tour</option>
                    </select>
                  </div>
                  <div className="travelDate">
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      required
                      onChange={handleChange}
                      aria-label="Travel Date"
                    />
                  </div>
                  <div className="message sm:col-span-2">
                    <textarea
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      name="message"
                      rows={3}
                      value={formData.message}
                      placeholder="Your Message *"
                      required
                      onChange={handleChange}
                      aria-label="Your Message"
                    />
                  </div>
                </div>
                <div className="block-button md:mt-6 mt-4">
                  <button type="submit" className="button-main">
                    Send Message
                  </button>
                </div>
              </form>

              {/* Status message */}
              {status && (
                <div className={`mt-4 ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
