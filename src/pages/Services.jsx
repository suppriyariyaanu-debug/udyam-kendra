import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import services, { categories } from "../data/services";
import slugify from "../utils/slugify";

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const target = document.getElementById(location.hash.slice(1));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
            compliance, IT and financial services, Udyam Kendra brings
            everything together in one place.
          </p>
        </div>
      </section>

      {/* Services grouped by category */}
      <section className="all-services">
        <div className="section-title">
          <p className="tagline">WHAT WE OFFER</p>

          <h2>Explore Our Services</h2>

          <p>
            Choose the service you need and get professional assistance
            from start to finish.
          </p>
        </div>

        {categories.map((category) => {
          const categoryServices = services.filter(
            (service) => service.category === category
          );

          if (categoryServices.length === 0) {
            return null;
          }

          return (
            <div
              className="service-category-group"
              id={slugify(category)}
              key={category}
            >
              <h3 className="service-category-heading">{category}</h3>

              <div className="all-services-grid">
                {categoryServices.map((service) => (
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
            </div>
          );
        })}
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
