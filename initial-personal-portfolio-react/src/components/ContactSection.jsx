import SectionHeader from './SectionHeader.jsx';

export default function ContactSection({ pitch, email, phone, links }) {
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
        <form
          className="contact-form"
          action="https://httpbin.org/post"
          method="POST"
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help?"
              required
            />
          </label>
          <button type="submit" className="button primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}