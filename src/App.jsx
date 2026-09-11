import React from "react";

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import Login from "./pages/Login";
import "./App.css";


/* ================= NAVBAR ================= */

function Navbar() {

  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");

  const handleSearch = () => {

    const value = search.toLowerCase().trim();

    if (!value) {
      alert("Please enter a service name.");
      return;
    }

    if (value.includes("company") || value.includes("private limited")) {
      navigate("/services/company");
    }

    else if (value.includes("llp")) {
      navigate("/services/llp");
    }

    else if (value.includes("gst")) {
      navigate("/services/gst");
    }

    else if (value.includes("udyam") || value.includes("msme")) {
      navigate("/services/udyam");
    }

    else if (value.includes("fssai") || value.includes("food")) {
      navigate("/services/fssai");
    }

    else if (
      value.includes("iec") ||
      value.includes("import") ||
      value.includes("export")
    ) {
      navigate("/services/iec");
    }

    else if (
      value.includes("trademark") ||
      value.includes("brand")
    ) {
      navigate("/services/trademark");
    }

    else if (
      value.includes("income tax") ||
      value.includes("itr") ||
      value.includes("tax")
    ) {
      navigate("/services/itr");
    }

    else {
      alert(
        "Service not found. Try GST, Company, Udyam, FSSAI, Trademark, Income Tax, LLP or IEC."
      );
    }
  };


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

              <Link to="/services/company">
                Company Registration
              </Link>

              <Link to="/services/llp">
                LLP Registration
              </Link>

            </div>

          </div>


          {/* REGISTRATIONS */}

          <div className="nav-dropdown">

            <span className="nav-dropdown-title">
              Registrations ▾
            </span>

            <div className="dropdown-menu">

              <Link to="/services/gst">
                GST Registration
              </Link>

              <Link to="/services/udyam">
                Udyam Registration
              </Link>

              <Link to="/services/fssai">
                FSSAI Registration
              </Link>

              <Link to="/services/iec">
                Import Export Code
              </Link>

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
<Link
  to="/login"
  className="login-btn"
>
  Login
</Link>

        

      </div>

    </nav>
  );
}


/* ================= HOME PAGE ================= */

function Home() {

  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");


  const handleSearch = () => {

    const value = search.toLowerCase().trim();

    if (!value) {
      alert("Please enter a service name.");
      return;
    }

    if (value.includes("company") || value.includes("private limited")) {
      navigate("/services/company");
    }

    else if (value.includes("llp")) {
      navigate("/services/llp");
    }

    else if (value.includes("gst")) {
      navigate("/services/gst");
    }

    else if (value.includes("udyam") || value.includes("msme")) {
      navigate("/services/udyam");
    }

    else if (value.includes("fssai") || value.includes("food")) {
      navigate("/services/fssai");
    }

    else if (
      value.includes("iec") ||
      value.includes("import") ||
      value.includes("export")
    ) {
      navigate("/services/iec");
    }

    else if (
      value.includes("trademark") ||
      value.includes("brand")
    ) {
      navigate("/services/trademark");
    }

    else if (
      value.includes("income tax") ||
      value.includes("itr") ||
      value.includes("tax")
    ) {
      navigate("/services/itr");
    }

    else {
      alert(
        "Service not found. Try GST, Company, Udyam, FSSAI, Trademark, Income Tax, LLP or IEC."
      );
    }
  };


  return (
    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="tagline">
            BUSINESS SERVICES MADE SIMPLE
          </p>

          <h1>
            Start, Manage & Grow
            <br />
            <span>Your Business with Udyam Kendra</span>
          </h1>

          <p className="hero-description">
            From business registration to taxation, compliance and
            technology solutions, get everything your business needs
            in one place.
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
              placeholder="Search for a business service..."
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
          <h2>50+</h2>
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
            From starting your business to managing compliance,
            we provide services to help your business grow.
          </p>

        </div>


        <div className="category-grid">

          <Link
            to="/services/company"
            className="category-card"
          >

            <div className="category-icon">
              🏢
            </div>

            <h3>
              Start a Business
            </h3>

            <p>
              Register your company or LLP and get your business started.
            </p>

            <span>
              Explore →
            </span>

          </Link>


          <Link
            to="/services/gst"
            className="category-card"
          >

            <div className="category-icon">
              📊
            </div>

            <h3>
              Tax & GST
            </h3>

            <p>
              Manage GST registration, income tax filing and tax services.
            </p>

            <span>
              Explore →
            </span>

          </Link>


          <Link
            to="/services/trademark"
            className="category-card"
          >

            <div className="category-icon">
              ™️
            </div>

            <h3>
              Protect Your Brand
            </h3>

            <p>
              Protect your business identity with trademark registration.
            </p>

            <span>
              Explore →
            </span>

          </Link>


          <Link
            to="/services/udyam"
            className="category-card"
          >

            <div className="category-icon">
              📋
            </div>

            <h3>
              Registrations
            </h3>

            <p>
              Complete important registrations required for your business.
            </p>

            <span>
              Explore →
            </span>

          </Link>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services">

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

          <ServiceCard
            icon="🏢"
            title="Company Registration"
            description="Register your company and start your business."
            link="/services/company"
          />

          <ServiceCard
            icon="📊"
            title="GST Registration"
            description="Complete your GST registration with expert assistance."
            link="/services/gst"
          />

          <ServiceCard
            icon="📋"
            title="Udyam Registration"
            description="Register your MSME business with Udyam."
            link="/services/udyam"
          />

          <ServiceCard
            icon="🍴"
            title="FSSAI Registration"
            description="Get the required registration for your food business."
            link="/services/fssai"
          />

          <ServiceCard
            icon="™️"
            title="Trademark Registration"
            description="Protect your brand name and business identity."
            link="/services/trademark"
          />

          <ServiceCard
            icon="💰"
            title="Income Tax Filing"
            description="File your income tax return with professional assistance."
            link="/services/itr"
          />

        </div>

      </section>


      {/* WHY US */}

      <section className="why-us">

        <div className="section-title">

          <p className="tagline">
            WHY UDYAM KENDRA
          </p>

          <h2>
            Your Business. Our Support.
          </h2>

          <p>
            We make business services simple, transparent and convenient.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div>✓</div>
            <h3>Simple Process</h3>
            <p>
              Easy and guided process from start to completion.
            </p>
          </div>

          <div className="why-card">
            <div>₹</div>
            <h3>Transparent Pricing</h3>
            <p>
              Clear pricing with no unnecessary surprises.
            </p>
          </div>

          <div className="why-card">
            <div>⚡</div>
            <h3>Quick Assistance</h3>
            <p>
              Get professional assistance whenever you need it.
            </p>
          </div>

          <div className="why-card">
            <div>🤝</div>
            <h3>Expert Support</h3>
            <p>
              Get guidance throughout your business journey.
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

        <Link
          to="/services"
          className="primary-btn"
        >
          Explore Services →
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div>

            <h2>
              Udyam Kendra
            </h2>

            <p>
              A Single Window Business Service
            </p>

          </div>


          <div>

            <h3>
              Services
            </h3>

            <Link to="/services/company">
              Company Registration
            </Link>

            <Link to="/services/gst">
              GST Registration
            </Link>

            <Link to="/services/udyam">
              Udyam Registration
            </Link>

            <Link to="/services/trademark">
              Trademark
            </Link>

          </div>


          <div>

            <h3>
              Company
            </h3>

            <Link to="/services">
              All Services
            </Link>

            <a href="#about">
              About Us
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </div>

        </div>


        <div className="footer-bottom">
          © 2026 Udyam Kendra. All rights reserved.
        </div>

      </footer>

    </div>
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


/* ================= MAIN APP ================= */

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:serviceId"
          element={<ServicePage />}
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