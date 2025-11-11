import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function ContactSection({
  pitch,
  email,
  phone,
  links,
  formEndpoint,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'pending', message: 'Sending your message…' });

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus({
        type: 'success',
        message: 'Thanks! Your message was sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          "Something went wrong. Please email me directly at nevilla@purdue.edu and I'll respond quickly.",
      });
    }
  };

  return (
    <section className="panel" id="contact">
      <SectionHeader title="Contact" subtitle="Let's start a conversation" />
      <div className="contact-grid">
        <div>
          <p>{pitch}</p>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={email.href}>{email.label}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={phone.href}>{phone.label}</a>
            </li>
            {links.map(({ label, href }) => (
              <li key={href}>
                <span>{new URL(href).hostname.includes('linkedin') ? 'LinkedIn' : 'GitHub'}</span>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="button primary">
            Send Message
          </button>
          {status.type !== 'idle' && (
            <p
              className={`contact-feedback contact-feedback--${status.type}`}
              role={status.type === 'success' ? 'status' : 'alert'}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}