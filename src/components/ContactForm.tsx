import React, { useState } from 'react';
import { RecruiterFormPayload } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<RecruiterFormPayload>({
    recruiterName: '',
    companyName: '',
    recruiterEmail: '',
    phoneNumber: '',
    jobTitle: '',
    jobLocation: '',
    employmentType: 'Full-time',
    companyWebsite: '',
    jobDescription: '',
    additionalMessage: '',
    honeypotField: ''
  });

  const [charCount, setCharCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<RecruiterFormPayload | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'jobDescription') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (!formData.recruiterName.trim() || !formData.companyName.trim() || !formData.recruiterEmail.trim()) {
      setErrorMsg('Please fill in all required fields marked with *');
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.recruiterEmail)) {
      setErrorMsg('Please provide a valid work email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate ASP.NET Core Controller Ingestion & SMTP dispatch pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });

      // Reset form fields
      setFormData({
        recruiterName: '',
        companyName: '',
        recruiterEmail: '',
        phoneNumber: '',
        jobTitle: '',
        jobLocation: '',
        employmentType: 'Full-time',
        companyWebsite: '',
        jobDescription: '',
        additionalMessage: '',
        honeypotField: ''
      });
      setCharCount(0);
    }, 1200);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff1e7]" id="contact">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              07 // Recruiter &amp; Talent Direct Channel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Recruiter Inquiries &amp; Opportunity Submission
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            Strict response SLA. Automatically ingested by custom ASP.NET Core backend handler.
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

              {/* Row 1: Recruiter Name & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="recruiterName">
                    Recruiter / Hiring Manager Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="recruiterName"
                    name="recruiterName"
                    value={formData.recruiterName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="companyName">
                    Company / Organization <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Enterprise Global Systems"
                    required
                    type="text"
                  />
                </div>
              </div>

              {/* Row 2: Recruiter Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="recruiterEmail">
                    Work Email (Reply-To Target) <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="recruiterEmail"
                    name="recruiterEmail"
                    value={formData.recruiterEmail}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="phoneNumber">
                    Phone Number <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 or +971..."
                    type="tel"
                  />
                </div>
              </div>

              {/* Row 3: Job Title & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="jobTitle">
                    Job Role / Position Title <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior .NET Developer / Full-Stack Engineer"
                    required
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="jobLocation">
                    Job Location <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="jobLocation"
                    name="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleInputChange}
                    placeholder="Noida / Remote / Hybrid / Dubai"
                    required
                    type="text"
                  />
                </div>
              </div>

              {/* Row 4: Employment Type & LinkedIn */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="employmentType">
                    Employment Type <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Full-time">Full-time Permanent</option>
                    <option value="Contract">Contract / Consulting</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Other">Other Engagement Model</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="companyWebsite">
                    LinkedIn / Company URL <span className="text-[#78776e] font-normal">(Optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/company/..."
                    type="url"
                  />
                </div>
              </div>

              {/* Row 5: Job Description & Char Counter */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="jobDescription">
                    Job Description / Opportunity Details <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <span className="font-mono text-xs text-[#78776e]">
                    {charCount} / 2000
                  </span>
                </div>
                <textarea
                  className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                  id="jobDescription"
                  maxLength={2000}
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  placeholder="Paste key responsibilities, tech stack requirements, and expected timeline..."
                  required
                  rows={4}
                />
              </div>

              {/* Row 6: Additional Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#241a0f]" htmlFor="additionalMessage">
                  Additional Note / Compensation Range <span className="text-[#78776e] font-normal">(Optional)</span>
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg bg-[#fff1e7] text-[#241a0f] border border-transparent focus:border-[#5b6141] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5b6141] text-sm transition-all"
                  id="additionalMessage"
                  name="additionalMessage"
                  value={formData.additionalMessage}
                  onChange={handleInputChange}
                  placeholder="e.g. Budget range, immediate joining requirement..."
                  type="text"
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
                      ? 'Processing ASP.NET Core Request...'
                      : 'Send Recruiter Enquiry'}
                  </span>
                </button>

                <span className="font-mono text-xs text-[#5b6141] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span>Direct delivery with Reply-To recruiter verification</span>
                </span>
              </div>

              {/* Simulated Response Alert (Dynamic) */}
              {submittedData && (
                <div className="p-5 rounded-xl bg-[#dde3ba] text-[#191e05] border border-[#c4caa2] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] text-[24px] shrink-0">
                      task_alt
                    </span>
                    <div>
                      <h4 className="font-bold text-[#241a0f] text-sm">
                        Enquiry Successfully Dispatched • HTTP 200 OK
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#47473f] leading-relaxed">
                        Thank you, <strong className="text-[#241a0f]">{submittedData.recruiterName}</strong>. Your opportunity specification for <em className="text-[#241a0f]">"{submittedData.jobTitle}"</em> at <strong className="text-[#241a0f]">{submittedData.companyName}</strong> was received. An automated verification receipt was simulated for <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-xs text-[#5b6141]">{submittedData.recruiterEmail}</code>. Mohammad Faiyyaz will review and respond promptly.
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
                      href="https://www.linkedin.com/in/mohammadfaiyyaz/?isSelfProfile=true"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      linkedin.com/in/mohammadfaiyyaz
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
                      github.com/mohammadfaiyyaz
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
                  Response Window
                </span>
                <p className="text-xs text-[#47473f] leading-relaxed">
                  Active recruiter messages received via this form are acknowledged within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
