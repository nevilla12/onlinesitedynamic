     export default function HeroSection({ eyebrow, name, summary, ctaPrimary, ctaSecondary, image }) {
       return (
         <header className="hero" id="top">
           <nav className="utility-nav">
             <a className="logo" href="#top">AN</a>
             <div className="utility-nav-links">
               <a href="#about">About</a>
               <a href="#skills">Skills</a>
               <a href="#education">Education</a>
               <a href="#accomplishments">Accomplishments</a>
               <a href="#contact">Contact</a>
             </div>
           </nav>
           <div className="hero-content">
             <div className="hero-text">
               <p className="eyebrow">{eyebrow}</p>
               <h1>{name}</h1>
               <p>{summary}</p>
               <div className="hero-actions">
                 <a className="button primary" href={ctaPrimary.href}>{ctaPrimary.label}</a>
                 <a className="button ghost" href={ctaSecondary.href}>{ctaSecondary.label}</a>
               </div>
             </div>
             <figure className="hero-portrait">
               <img
                 src={image.src}
                 alt={image.alt}
                 width={image.width}
                 height={image.height}
               />
             </figure>
           </div>
         </header>
       );
     }