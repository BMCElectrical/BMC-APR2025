'use client';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  suburb: string;
  message: string;
}

interface FormError {
  type: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    company: '',
    suburb: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<FormError | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', mobile: '', company: '', suburb: '', message: '' });
    } catch (err) {
      setError({
        type: 'error',
        message: err instanceof Error ? err.message : 'Failed to send message'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = 'w-full rounded-lg px-4 py-3 text-text placeholder:text-text-secondary focus:outline-none focus:border-tertiary transition-colors bg-background border border-primary/10 focus:bg-background/80';

  const labelClasses = 'block text-sm font-medium mb-2 text-text';

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="text-center p-8 rounded-xl border bg-tertiary/5 border-tertiary/20">
          <i className="fas fa-check-circle text-4xl text-tertiary mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2 text-text">Thank You!</h3>
          <p className="text-text-secondary">
            We&apos;ve received your message and will get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-tertiary hover:text-tertiary/80 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
              <p>{error.message}</p>
            </div>
          )}

          <div>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="mobile" className={labelClasses}>
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your mobile number"
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="suburb" className={labelClasses}>
              Suburb
            </label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              required
              value={formData.suburb}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your suburb"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="Tell us about your project or requirements"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 rounded-full flex items-center justify-center gap-2 group disabled:opacity-70 transition-transform duration-300 hover:scale-102"
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner w-5 h-5 mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}