import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages/styles/ContactPage.css';

export const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: null,
    budget: null,
    message: '',
    contactMethod: 'email',
    hearAboutUs: null,
    termsAccepted: false
  });

  // This effect will scroll to top when the component mounts
  // and whenever the location changes
  useEffect(() => {
    // Always scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [location]);

  const serviceOptions = [
    { label: 'Web Designing & Development', value: 'web' },
    { label: 'Mobile Application Development', value: 'mobile' },
    { label: 'DevOps Consulting', value: 'devops' },
    { label: 'Blogging', value: 'blogging' },
    { label: 'Frontend Development', value: 'frontend' },
    { label: 'Backend Development', value: 'backend' },
    { label: 'Security', value: 'security' },
    { label: 'Other', value: 'other' }
  ];

  const budgetOptions = [
    { label: 'Less than $5,000', value: 'small' },
    { label: '$5,000 - $10,000', value: 'medium' },
    { label: '$10,000 - $25,000', value: 'large' },
    { label: '$25,000+', value: 'enterprise' }
  ];

  const hearAboutUsOptions = [
    { label: 'Google', value: 'google' },
    { label: 'Social Media', value: 'social' },
    { label: 'Referral', value: 'referral' },
    { label: 'Other', value: 'other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Ready to transform your ideas into reality? Get in touch with our team.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-box">
            <h3>Our Office</h3>
            <p>123 Tech Boulevard</p>
            <p>Innovation District</p>
            <p>NY 10001, USA</p>
          </div>
          
          <div className="info-box">
            <h3>Contact Details</h3>
            <p>Email: info@hexxa.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          
          <div className="info-box">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: By appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                <InputText 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address <span className="required">*</span></label>
                <InputText 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <InputText 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <InputText 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest <span className="required">*</span></label>
                <Dropdown 
                  id="service" 
                  name="service" 
                  options={serviceOptions} 
                  value={formData.service} 
                  onChange={(e) => setFormData({...formData, service: e.value})} 
                  placeholder="Select a service"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget</label>
                <Dropdown 
                  id="budget" 
                  name="budget" 
                  options={budgetOptions} 
                  value={formData.budget} 
                  onChange={(e) => setFormData({...formData, budget: e.value})} 
                  placeholder="Select budget range"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Project Details <span className="required">*</span></label>
                <InputTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows={5} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="contact-method">
                  <div className="p-field-radiobutton">
                    <RadioButton 
                      inputId="contactEmail" 
                      name="contactMethod" 
                      value="email" 
                      onChange={handleInputChange} 
                      checked={formData.contactMethod === 'email'} 
                    />
                    <label htmlFor="contactEmail">Email</label>
                  </div>
                  <div className="p-field-radiobutton">
                    <RadioButton 
                      inputId="contactPhone" 
                      name="contactMethod" 
                      value="phone" 
                      onChange={handleInputChange} 
                      checked={formData.contactMethod === 'phone'} 
                    />
                    <label htmlFor="contactPhone">Phone</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="hearAboutUs">How Did You Hear About Us?</label>
                <Dropdown 
                  id="hearAboutUs" 
                  name="hearAboutUs" 
                  options={hearAboutUsOptions} 
                  value={formData.hearAboutUs} 
                  onChange={(e) => setFormData({...formData, hearAboutUs: e.value})} 
                  placeholder="Select an option"
                />
              </div>

              <div className="form-group">
                <label>Attachment Upload</label>
                <FileUpload 
                  mode="basic" 
                  name="attachment" 
                  accept="image/*,application/pdf" 
                  maxFileSize={10000000} 
                  chooseLabel="Choose File"
                  className='file-upload'
                />
              </div>

              <div className="form-group terms-checkbox">
                <Checkbox 
                  inputId="termsAccepted" 
                  checked={formData.termsAccepted} 
                  onChange={handleCheckboxChange} 
                />
                <label htmlFor="termsAccepted">I agree to the <a href="/privacy-policy">privacy policy</a> <span className="required">*</span></label>
              </div>

              <Button 
                type="submit" 
                label="Send Inquiry" 
                className="submit-button"
                disabled={!formData.termsAccepted} 
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

