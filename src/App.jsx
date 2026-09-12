import React from "react";

import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import services, { categories } from "./data/services";
import slugify from "./utils/slugify";
import "./App.css";


/* ================= SEARCH HELPER ================= */

function findService(query) {
  const value = query.toLowerCase().trim();

  if (!value) return null;

  return (
    services.find((service) => service.id === value) ||
    services.find(
      (service) =>
        service.shortTitle.toLowerCase().includes(value) ||
        service.title.toLowerCase().includes(value)
    ) ||
    services.find((service) => service.category.toLowerCase().includes(value)) ||
    null
  );
}


/* ================= CATEGORY CONTENT ================= */

const categoryContent = {
  "Start Business": {
    icon: "🏢",
    blurb: "Register your company, LLP or proprietorship and get started.",
  },
  "Registrations": {
    icon: "📋",
    blurb: "Complete the registrations your business needs to operate legally.",
  },
  "Compliances": {
    icon: "🧮",
    blurb: "Stay on top of GST, ROC, TDS and other recurring compliance.",
  },
  "IT Services": {
    icon: "💻",
    blurb: "Build your online presence with websites and digital marketing.",
  },
  "Financial Services": {
    icon: "💰",
    blurb: "Get support with loans, accounting and income tax filing.",
  },
  "Trademark": {
    icon: "™️",
    blurb: "Protect your brand name, logo and identity.",
  },
};

const popularServiceIds = ["company", "gst", "udyam", "trademark", "itr", "website"];


/* ================= SCROLL TO TOP ON ROUTE CHANGE ================= */

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}


/* ================= NAVBAR ================= */

function Navbar() {

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          Udyam Kendra
        </Link>


        <div className="nav-links">

          {/* START BUSINESS */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              Start Business ▾
            </span>

            <div className="dropdown-menu">
              {services
                .filter((service) => service.category === "Start Business")
                .map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    {service.shortTitle}
                  </Link>
                ))}
            </div>

          </div>


          {/* REGISTRATIONS */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              Registrations ▾
            </span>

            <div className="dropdown-menu">
              {services
                .filter((service) => service.category === "Registrations")
                .map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    {service.shortTitle}
                  </Link>
                ))}
            </div>

          </div>


          {/* COMPLIANCES */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              Compliances ▾
            </span>

            <div className="dropdown-menu">
              {services
                .filter((service) => service.category === "Compliances")
                .map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    {service.shortTitle}
                  </Link>
                ))}
            </div>

          </div>


          {/* IT SERVICES */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              IT Services ▾
            </span>

            <div className="dropdown-menu">
              {services
                .filter((service) => service.category === "IT Services")
                .map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    {service.shortTitle}
                  </Link>
                ))}
            </div>

          </div>


          {/* FINANCIAL SERVICES */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              Financial Services ▾
            </span>

            <div className="dropdown-menu">
              {services
                .filter((service) => service.category === "Financial Services")
                .map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    {service.shortTitle}
                  </Link>
                ))}
            </div>

          </div>


          <Link to="/services/trademark">
            Trademark
          </Link>

          <Link to="/services/gst">
            GST
          </Link>

          <Link to="/services/itr">
            Income Tax
          </Link>

          <Link to="/services">
            All Services
          </Link>

        </div>

        <div className="navbar-actions">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/services" className="get-started-btn">
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}


/* ================= HOME PAGE ================= */

function Home() {

  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");


  const handleSearch = () => {
    if (!search.trim()) return;

    const match = findService(search);

    navigate(match ? `/services/${match.id}` : "/services");
  };


  return (
    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="tagline">
            A SINGLE WINDOW BUSINESS SERVICE
          </p>

          <h1>
            Build. Register. <span>Grow.</span>
          </h1>

          <p className="hero-description">
            Your trusted single-window partner for business services —
            from company registration to compliance, taxation and
            technology, all in one place.
          </p>


          <div className="hero-buttons">

            <Link
              to="/services"
              className="primary-btn"
            >
              Get Started →
            </Link>

            <a
              href="#popular-services"
              className="secondary-btn"
            >
              Explore Services
            </a>

          </div>


          {/* SEARCH */}

          <div className="search-box">

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search for a business service, e.g. GST, Trademark, Company..."
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

        </div>

      </section>


      {/* TRUST STATS */}

      <section className="trust-stats">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Businesses Served</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Business Services</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Online Support</p>
        </div>

      </section>


      {/* BUSINESS CATEGORIES */}

      <section className="business-categories">

        <div className="section-title">

          <p className="tagline">
            BUSINESS SOLUTIONS
          </p>

          <h2>
            Everything Your Business Needs
          </h2>

          <p>
            From starting your business to managing compliance, IT and
            finance, we provide services to help your business grow.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category) => (
            <Link
              key={category}
              to={`/services#${slugify(category)}`}
              className="category-card"
            >

              <div className="category-icon">
                {categoryContent[category].icon}
              </div>

              <h3>
                {category}
              </h3>

              <p>
                {categoryContent[category].blurb}
              </p>

              <span>
                Explore →
              </span>

            </Link>
          ))}

        </div>

      </section>


      {/* SERVICES */}

      <section className="services" id="popular-services">

        <div className="section-title">

          <p className="tagline">
            POPULAR SERVICES
          </p>

          <h2>
            Business Services
          </h2>

          <p>
            Professional assistance for your most important business needs.
          </p>

        </div>


        <div className="services-grid">

          {popularServiceIds.map((id) => {
            const service = services.find((item) => item.id === id);

            if (!service) return null;

            return (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.shortTitle}
                description={service.description}
                link={`/services/${service.id}`}
              />
            );
          })}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how-it-works">

        <div className="section-title">

          <p className="tagline">
            HOW IT WORKS
          </p>

          <h2>
            Get Started in Four Simple Steps
          </h2>

          <p>
            A straightforward process designed to get your business
            service completed without the hassle.
          </p>

        </div>


        <div className="step-grid">

          <div className="step-card">
            <span>01</span>
            <h3>Choose a Service</h3>
            <p>Browse our services and pick the one your business needs.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Submit Your Requirement</h3>
            <p>Share your details and requirements through a quick form.</p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Get Expert Assistance</h3>
            <p>Our team reviews your requirement and guides you through it.</p>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>Complete Your Service</h3>
            <p>Receive your certificate, filing or confirmation — done.</p>
          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="why-us">

        <div className="section-title">

          <p className="tagline">
            WHY UDYAM KENDRA
          </p>

          <h2>
            Why Choose Udyam Kendra?
          </h2>

          <p>
            We make business services simple, transparent and convenient.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div>🎯</div>
            <h3>Expert Assistance</h3>
            <p>
              Get guidance from professionals who understand business
              registration, compliance and taxation.
            </p>
          </div>

          <div className="why-card">
            <div>🔍</div>
            <h3>Transparent Process</h3>
            <p>
              Know exactly what's required and what to expect, with clear
              pricing and no hidden surprises.
            </p>
          </div>

          <div className="why-card">
            <div>🤝</div>
            <h3>End-to-End Support</h3>
            <p>
              From your first enquiry to service completion, we stay with
              you at every step.
            </p>
          </div>

          <div className="why-card">
            <div>✓</div>
            <h3>Reliable Service</h3>
            <p>
              Consistent, dependable assistance you can count on for every
              business need.
            </p>
          </div>

          <div className="why-card">
            <div>🧩</div>
            <h3>Multiple Business Solutions</h3>
            <p>
              Registrations, compliance, IT and financial services — all
              under a single window.
            </p>
          </div>

          <div className="why-card">
            <div>📞</div>
            <h3>Dedicated Support</h3>
            <p>
              Reach out any time and our team will be there to help you
              move forward.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>
          Ready to Start Your Business?
        </h2>

        <p>
          Choose the right service and take the next step with Udyam Kendra.
        </p>

        <div className="hero-buttons">

          <Link
            to="/services"
            className="primary-btn"
          >
            Explore Services →
          </Link>

          <button
            className="secondary-btn"
            onClick={() =>
              alert("Our team will contact you shortly.")
            }
          >
            Talk to an Expert
          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}


/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>

          <h2>
            Udyam Kendra
          </h2>

          <p>
            A Single Window Business Service. Your trusted partner for
            business registration, compliance, IT and financial services.
          </p>

          <p>
            <a href="mailto:support@udyamkendra.in">support@udyamkendra.in</a>
          </p>

        </div>


        <div>

          <h3>
            Services
          </h3>

          {categories.map((category) => (
            <Link key={category} to={`/services#${slugify(category)}`}>
              {category}
            </Link>
          ))}

        </div>


        <div>

          <h3>
            Company
          </h3>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/about">
            Our Team
          </Link>

          <Link to="/services">
            All Services
          </Link>

          <a href="mailto:support@udyamkendra.in">
            Contact Us
          </a>

        </div>


        <div>

          <h3>
            Useful Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/services">
            Get Started
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 Udyam Kendra. All rights reserved.
      </div>

    </footer>
  );
}


/* ================= SERVICE CARD ================= */

function ServiceCard({
  icon,
  title,
  description,
  link,
}) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <Link to={link}>
        View Service →
      </Link>

    </div>
  );
}


/* ================= PAGE WRAPPER (adds footer to non-home pages) ================= */

function PageWithFooter({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}


/* ================= MAIN APP ================= */

function App() {

  return (
    <BrowserRouter>

      <ScrollToTop />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<PageWithFooter><Services /></PageWithFooter>}
        />

        <Route
          path="/services/:serviceId"
          element={<PageWithFooter><ServicePage /></PageWithFooter>}
        />

        <Route
          path="/about"
          element={<PageWithFooter><About /></PageWithFooter>}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
