import { Link } from "react-router-dom";
import team from "../data/team";
import { categories } from "../data/services";
import slugify from "../utils/slugify";

const categoryIcons = {
  "Start Business": "🏢",
  "Registrations": "📋",
  "Compliances": "🧮",
  "IT Services": "💻",
  "Financial Services": "💰",
  "Trademark": "™️",
};

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="services-page-hero">
        <div>
          <p className="tagline">ABOUT US</p>

          <h1>
            About <span>Udyam Kendra</span>
          </h1>

          <p>
            Udyam Kendra is a single-window business services platform,
            built to make business registration, compliance and growth
            simple for entrepreneurs and small businesses across India.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="section-title">
          <p className="tagline">OUR MISSION</p>
          <h2>A Single Window for Every Business Need</h2>
          <p>
            Starting and running a business involves navigating registrations,
            regulatory filings, taxation and, increasingly, technology. Udyam
            Kendra brings these under one roof so business owners can focus
            on building their business instead of chasing paperwork.
          </p>
        </div>

        <div className="about-pillars">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/services#${slugify(category)}`}
              className="about-pillar"
            >
              <div className="category-icon">{categoryIcons[category]}</div>
              <h3>{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="section-title">
          <p className="tagline">OUR TEAM</p>
          <h2>The People Behind Udyam Kendra</h2>
          <p>
            A team of business, compliance and technology professionals
            dedicated to helping you get things right, the first time.
          </p>
        </div>

        {team.length > 0 ? (
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                {member.bio && <p className="team-bio">{member.bio}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="team-placeholder">
            <p>Team profiles are being finalized and will be published here shortly.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Explore our services and let Udyam Kendra be your trusted
          single-window partner for business.
        </p>
        <Link to="/services" className="primary-btn">
          Explore Services →
        </Link>
      </section>
    </div>
  );
}

export default About;
