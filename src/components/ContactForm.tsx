import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ffccl8b';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_n5n7qzj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'okxuNrNY3daqTyfw2';

interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  location: string;
  employmentType: string;
  companyWebsite: string;
  message: string;
  honeypotField: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    location: '',
    employmentType: '',
    companyWebsite: '',
    message: '',
    honeypotField: ''
  });

  const [charCount, setCharCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            title: 'Website contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
            recruiter_name: formData.name,
            company_name: formData.companyName.trim() || 'Not provided',
            recruiter_email: formData.email,
            phone_number: formData.phone.trim() || 'Not provided',
            job_title: formData.subject.trim() || 'General inquiry',
            job_location: formData.location.trim() || 'Not provided',
            employment_type: formData.employmentType || 'Not specified',
            company_website: formData.companyWebsite.trim() || 'Not provided',
            job_description: formData.message,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );

        // Email successfully sent
        setSubmittedData({ ...formData });

        // Reset form fields
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          subject: '',
          location: '',
          employmentType: '',
          companyWebsite: '',
          message: '',
          honeypotField: '',
        });

        setCharCount(0);
      } catch (error) {
        console.error('Email sending failed:', error);
        setSubmittedData(null);
        const errorText =
          typeof error === 'object' && error !== null && 'text' in error &&
          typeof error.text === 'string'
            ? error.text
            : error instanceof Error
              ? error.message
              : '';
        setErrorMsg(
          errorText
            ? `EmailJS error: ${errorText}`
            : 'Your message could not be sent. Please check the EmailJS setup and try again.'
        );
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff1e7]" id="contact">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              07 // Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Get in Touch
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            Have a question, idea, or opportunity? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form Card (col 8) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-[#f4dfce]">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot Field for Spam Protection (Hidden) */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="honeypot_field">Leave this empty</label>
                <input
                  id="honeypot_field"
                  name="honeypotField"
                  value={formData.honeypotField}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  type="text"
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="name">
                    Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="email">
                    Email <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="companyName">
                    Company / Organization <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company or organization"
                    autoComplete="organization"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="phone">
                    Phone <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    autoComplete="tel"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="subject">
                    Subject / Job Title <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is your message about?"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="location">
                    Location <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, country, or remote"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="employmentType">
                    Engagement Type <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select if relevant</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract / Consulting</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="companyWebsite">
                    Company / LinkedIn URL <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    type="url"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="message">
                    Message <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <span className="font-mono text-xs text-[#78776e]">
                    {charCount} / 2000
                  </span>
                </div>
                <textarea
                  className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                  id="message"
                  maxLength={2000}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  required
                  rows={6}
                />
              </div>
              {/* Validation Error Banner */}
              {errorMsg && (
                <div className="p-3 bg-[#ffdad6] text-[#93000a] rounded-lg text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button & Security Note */}
              <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
                <button
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#151608] text-white hover:bg-[#5b6141] px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isSubmitting ? 'animate-spin' : ''
                    }`}
                  >
                    {isSubmitting ? 'progress_activity' : 'send'}
                  </span>
                  <span>
                    {isSubmitting
                      ? 'Sending message...'
                      : 'Send Message'}
                  </span>
                </button>

                <span className="font-mono text-xs text-[#5b6141] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span>Please don’t include sensitive personal information.</span>
                </span>
              </div>

              {/* Submission confirmation */}
              {submittedData && (
                <div className="p-5 rounded-xl bg-[#dde3ba] text-[#191e05] border border-[#c4caa2] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] text-[24px] shrink-0">
                      task_alt
                    </span>
                    <div>
                      <h4 className="font-bold text-[#241a0f] text-sm">
                        Message sent
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#47473f] leading-relaxed">
                        Thank you, <strong className="text-[#241a0f]">{submittedData.name}</strong>. Your message was sent successfully. I’ll review it and get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Metadata & Socials (col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest">
                Direct Channels
              </span>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffeada] flex items-center justify-center text-[#5b6141] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block">
                      Email
                    </span>
                    <a
                      className="font-mono text-xs text-[#241a0f] hover:text-[#5b6141] underline break-all"
                      href="mailto:fk99810727@gmail.com"
                    >
                      fk99810727@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffeada] flex items-center justify-center text-[#5b6141] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block">
                      LinkedIn
                    </span>
                    <a
                      className="font-mono text-xs text-[#241a0f] hover:text-[#5b6141] underline"
                      href="https://www.linkedin.com/in/mohammadfaiyyaz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Mohammad Faiyyaz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffeada] flex items-center justify-center text-[#5b6141] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block">
                      GitHub Profile
                    </span>
                    <a
                      className="font-mono text-xs text-[#241a0f] hover:text-[#5b6141] underline"
                      href="https://github.com/mohammadfaiyyaz"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Mohammad Faiyyaz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffeada] flex items-center justify-center text-[#5b6141] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block">
                      Location
                    </span>
                    <span className="text-sm text-[#241a0f] font-semibold">
                      Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#ffeada] rounded-xl border border-[#f4dfce]">
                <span className="text-[11px] font-bold uppercase text-[#5b6141] block mb-1">
                  Response Time
                </span>
                <p className="text-xs text-[#47473f] leading-relaxed">
                  I’ll review your message and respond as soon as I can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
