import "../scss/HeroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The browser built for you</h1>
        <p className="hero-subtitle">
          Fast, secure, and customizable — discover the features as you scroll.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
}
