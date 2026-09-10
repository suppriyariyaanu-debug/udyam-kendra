import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import "./App.css";

function Home() {
  const services = [
    {
      id: "company",
      icon: "🏢",
      title: "Company Registration",
      description:
        "Register your private limited company quickly and easily.",
    },
    {
      id: "gst",
      icon: "📄",
      title: "GST Registration",
      description:
        "Get your GST registration with professional assistance.",
    },
    {
      id: "udyam",
      icon: "📋",
      title: "Udyam Registration",
      description:
        "Register your MSME business and get your Udyam certificate.",
    },
    {
      id: "fssai",
      icon: "🍴",
      title: "FSSAI Registration",
      description:
        "Get your food business registration and compliance support.",
    },
    {
      id: "trademark",
      icon: "™️",
      title: "Trademark Registration",
      description:
        "Protect your brand name, logo and business identity.",
    },
    {
      id: "itr",
      icon: "💰",
      title: "Income Tax Filing",
      description:
        "File your income tax returns with expert assistance.",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">

  <Link to="/" className="logo">
    Udyam <span>Kendra</span>
  </Link>

  <nav className="main-nav">

    <div className="nav-dropdown">
      <button className="nav-button">
        Start Business <span>▼</span>
      </button>

      <div className="dropdown-menu">

        <Link to="/services/company">
          <strong>Company Registration</strong>
          <small>Start your company</small>
        </Link>

        <Link to="/services/llp">
          <strong>LLP Registration</strong>
          <small>Register your LLP</small>
        </Link>

      </div>
    </div>


    <div className="nav-dropdown">
      <button className="nav-button">
        Registrations <span>▼</span>
      </button>

      <div className="dropdown-menu">

        <Link to="/services/gst">
          <strong>GST Registration</strong>
          <small>Register for GST</small>
        </Link>

        <Link to="/services/udyam">
          <strong>Udyam Registration</strong>
          <small>MSME registration</small>
        </Link>

        <Link to="/services/fssai">
          <strong>FSSAI Registration</strong>
          <small>Food business registration</small>
        </Link>

        <Link to="/services/iec">
          <strong>IEC Registration</strong>
          <small>Import Export Code</small>
        </Link>

      </div>
    </div>


    <Link to="/services/trademark" className="simple-link">
      Trademark
    </Link>

    <Link to="/services/gst" className="simple-link">
      GST
    </Link>

    <Link to="/services/itr" className="simple-link">
      Income Tax
    </Link>

    <Link to="/services" className="simple-link">
      All Services
    </Link>

    <button className="login-btn">
      Login
    </button>

  </nav>

</header>
              


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="tagline">
            BUSINESS SERVICES MADE SIMPLE
          </p>

          <h1>
            Start, Manage & Grow
            <br />
            Your Business with
            <span> Udyam Kendra</span>
          </h1>

          <p className="description">
            From business registration to compliance,
            taxation and professional services — everything
            your business needs in one place.
          </p>

          <Link to="/services">
            <button className="primary-btn">
              Explore Services
            </button>
          </Link>

        </div>

      </section>


      {/* SEARCH */}
      <section className="search-section">

        <div className="search-box">

          <input
            type="text"
            placeholder="Search for a business service..."
          />

          <button>
            Search
          </button>

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
      What Does Your Business Need?
    </h2>

    <p>
      Explore our complete range of business services.
    </p>

  </div>


  <div className="category-grid">

    <Link to="/services/company" className="category-card">
      <div className="category-icon">🚀</div>
      <h3>Start a Business</h3>
      <p>Register and launch your new business.</p>
      <span>Explore →</span>
    </Link>


    <Link to="/services/gst" className="category-card">
      <div className="category-icon">📊</div>
      <h3>Tax & GST</h3>
      <p>GST registration, tax filing and compliance.</p>
      <span>Explore →</span>
    </Link>


    <Link to="/services/trademark" className="category-card">
      <div className="category-icon">™️</div>
      <h3>Protect Your Brand</h3>
      <p>Trademark and intellectual property services.</p>
      <span>Explore →</span>
    </Link>


    <Link to="/services/udyam" className="category-card">
      <div className="category-icon">📋</div>
      <h3>Registrations</h3>
      <p>Essential registrations for your business.</p>
      <span>Explore →</span>
    </Link>

  </div>

</section>
      {/* SERVICES */}
      <section className="services">

        <div className="section-title">

          <p className="tagline">
            OUR SERVICES
          </p>

          <h2>
            Everything Your Business Needs
          </h2>

          <p>
            Professional services to start, manage and grow
            your business.
          </p>

        </div>


        <div className="service-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.id}
            >

              <div className="icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <Link to={`/services/${service.id}`}>
                <button>
                  Know More →
                </button>
              </Link>

            </div>

          ))}

        </div>

      </section>

{/* TRUSTED BY BUSINESSES */}
<section className="client-trust">

  <div className="section-title">

    <p className="tagline">
      TRUSTED BY BUSINESSES
    </p>

    <h2>
      Helping Businesses Move Forward
    </h2>

    <p>
      Businesses across different industries trust Udyam Kendra
      for their registration and compliance needs.
    </p>

  </div>


  <div className="client-logos">

    <div className="client-logo">
      TECHNOVA
    </div>

    <div className="client-logo">
      VISTARA
    </div>

    <div className="client-logo">
      NOVAFOODS
    </div>

    <div className="client-logo">
      FINEDGE
    </div>

    <div className="client-logo">
      GREENCORE
    </div>

  </div>

</section>
      {/* WHY US */}
      <section className="why-us">

        <div>

          <p className="tagline">
            WHY UDYAM KENDRA
          </p>

          <h2>
            Your Trusted Business Partner
          </h2>

          <p>
            We simplify complex business registrations,
            compliance and professional services so that
            you can focus on growing your business.
          </p>

        </div>


        <div className="benefits">

          <div>
            <span>01</span>
            <h3>Expert Assistance</h3>
            <p>
              Get guidance from experienced professionals.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Simple Process</h3>
            <p>
              Easy documentation and transparent processes.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>End-to-End Support</h3>
            <p>
              We support you from application to completion.
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
          Let Udyam Kendra handle the paperwork while
          you focus on your business.
        </p>

        <Link to="/services">
          <button className="primary-btn">
            Get Started
          </button>
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div>

          <div className="logo">
            Udyam <span>Kendra</span>
          </div>

          <p>
            A single window business service platform
            helping businesses start, manage and grow.
          </p>

        </div>


        <div>

          <h4>
            Services
          </h4>

          <p>Company Registration</p>
          <p>GST Registration</p>
          <p>Udyam Registration</p>
          <p>Trademark Registration</p>

        </div>


        <div>

          <h4>
            Contact
          </h4>

          <p>
            Email: support@udyamkendra.com
          </p>

          <p>
            Phone: +91 XXXXX XXXXX
          </p>

        </div>

      </footer>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

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

</Routes>

    </BrowserRouter>
  );
}

export default App;