import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: "company",
      icon: "🏢",
      title: "Company Registration",
      description:
        "Register your Private Limited Company with complete professional assistance.",
      price: "Starting from ₹999",
    },
    {
      id: "gst",
      icon: "📄",
      title: "GST Registration",
      description:
        "Get your GST registration completed quickly with expert guidance.",
      price: "Starting from ₹499",
    },
    {
      id: "udyam",
      icon: "📋",
      title: "Udyam Registration",
      description:
        "Register your MSME business and obtain your Udyam Registration certificate.",
      price: "Starting from ₹299",
    },
    {
      id: "fssai",
      icon: "🍴",
      title: "FSSAI Registration",
      description:
        "Complete your food business registration and stay compliant.",
      price: "Starting from ₹999",
    },
    {
      id: "trademark",
      icon: "™️",
      title: "Trademark Registration",
      description:
        "Protect your brand name, logo and intellectual property.",
      price: "Starting from ₹1499",
    },
    {
      id: "itr",
      icon: "💰",
      title: "Income Tax Filing",
      description:
        "File your income tax return with professional assistance.",
      price: "Starting from ₹499",
    },
    {
      id: "llp",
      icon: "🤝",
      title: "LLP Registration",
      description:
        "Start your Limited Liability Partnership with complete support.",
      price: "Starting from ₹1999",
    },
    {
      id: "iec",
      icon: "🌍",
      title: "IEC Registration",
      description:
        "Get your Import Export Code for international business.",
      price: "Starting from ₹999",
    },
  ];

  return (
    <div className="all-services-page">

      {/* PAGE HERO */}

      <section className="services-page-hero">

        <p className="tagline">
          UDYAM KENDRA
        </p>

        <h1>
          Business Services
        </h1>

        <p>
          Everything you need to start, manage and grow
          your business — all in one place.
        </p>

      </section>


      {/* SERVICES */}

      <section className="all-services">

        <div className="section-title">

          <p className="tagline">
            EXPLORE OUR SERVICES
          </p>

          <h2>
            Choose the Right Service
          </h2>

          <p>
            Select a service and get professional assistance
            from our team.
          </p>

        </div>


        <div className="all-services-grid">

          {services.map((service) => (

            <div
              className="all-service-card"
              key={service.id}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <strong>
                {service.price}
              </strong>

              <Link
                to={`/services/${service.id}`}
                className="service-link"
              >
                View Service →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Services;