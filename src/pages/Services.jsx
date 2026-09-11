import { Link } from "react-router-dom";

const services = [
  {
    id: "company",
    icon: "🏢",
    title: "Company Registration",
    description:
      "Register your private limited company and start your business with complete support.",
    price: "Starting from ₹999",
  },
  {
    id: "llp",
    icon: "🤝",
    title: "LLP Registration",
    description:
      "Set up your Limited Liability Partnership with a simple and guided process.",
    price: "Starting from ₹999",
  },
  {
    id: "gst",
    icon: "📊",
    title: "GST Registration",
    description:
      "Get your GST registration completed quickly with professional assistance.",
    price: "Starting from ₹499",
  },
  {
    id: "udyam",
    icon: "📋",
    title: "Udyam Registration",
    description:
      "Register your MSME business and get your Udyam Registration certificate.",
    price: "Starting from ₹299",
  },
  {
    id: "fssai",
    icon: "🍴",
    title: "FSSAI Registration",
    description:
      "Get your food business registered with the required FSSAI license.",
    price: "Starting from ₹999",
  },
  {
    id: "iec",
    icon: "🌍",
    title: "Import Export Code",
    description:
      "Get your IEC registration to start importing and exporting goods.",
    price: "Starting from ₹999",
  },
  {
    id: "trademark",
    icon: "™️",
    title: "Trademark Registration",
    description:
      "Protect your brand name, logo and identity with trademark registration.",
    price: "Starting from ₹999",
  },
  {
    id: "itr",
    icon: "💰",
    title: "Income Tax Filing",
    description:
      "File your income tax returns accurately with professional assistance.",
    price: "Starting from ₹499",
  },
];

function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="services-page-hero">
        <div>
          <p className="tagline">OUR SERVICES</p>

          <h1>
            Business Services
            <span> Made Simple</span>
          </h1>

          <p>
            From starting your business to managing registrations,
            compliance and taxation, Udyam Kendra brings everything
            together in one place.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="all-services">
        <div className="section-title">
          <p className="tagline">WHAT WE OFFER</p>

          <h2>Explore Our Services</h2>

          <p>
            Choose the service you need and get professional assistance
            from start to finish.
          </p>
        </div>

        <div className="all-services-grid">
          {services.map((service) => (
            <div className="service-page-card" key={service.id}>
              <div className="service-page-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <strong>{service.price}</strong>

              <Link to={`/services/${service.id}`}>
                View Service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Not sure which service you need?</h2>

        <p>
          Talk to our team and we'll help you choose the right
          business service.
        </p>

        <button
          onClick={() =>
            alert("Our team will contact you shortly.")
          }
        >
          Talk to an Expert
        </button>
      </section>
    </div>
  );
}

export default Services;