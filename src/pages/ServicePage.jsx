import { useState } from "react";
import { useParams } from "react-router-dom";
import services from "../data/services";

function ServicePage() {
  const { serviceId } = useParams();

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    businessName: "",
    location: "",
    requirement: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Thank you ${formData.name}! Our team will contact you shortly regarding ${service.title}.`
    );

    setFormData({
      name: "",
      mobile: "",
      email: "",
      businessName: "",
      location: "",
      requirement: "",
    });
  };

  const faqs = [
    {
      question: "What information will I need to provide?",
      answer:
        "The requirements depend on the selected service. Generally, PAN, Aadhaar, address proof and basic business details may be required — the exact list is shown above under \"What We'll Need From You\".",
    },
    {
      question: "How does the process work?",
      answer:
        "Submit your basic details, share the required information and our team will guide you through the application and completion process.",
    },
    {
      question: "How long does the service take?",
      answer:
        "The turnaround time depends on the type of service and, where applicable, the respective government authority. Our team will keep you updated throughout.",
    },
    {
      question: "Will I receive a confirmation or certificate?",
      answer:
        "Where applicable, you will receive the relevant registration certificate, filing acknowledgement or confirmation after successful completion.",
    },
  ];

  return (
    <div className="service-page">

      {/* ================= HERO ================= */}

      <section className="service-hero">

        <div className="service-hero-content">

          <p className="tagline">
            {service.category}
          </p>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.description}
          </p>

          <div className="service-price">
            Starting from{" "}
            <strong>{service.price.replace(/^Starting from /, "")}</strong>
          </div>

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("enquiry")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Get Started →
          </button>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section className="service-benefits">

        <div className="section-title">

          <p className="tagline">
            WHY CHOOSE US
          </p>

          <h2>
            Benefits of Our Service
          </h2>

          <p>
            Get professional guidance and support from start to finish.
          </p>

        </div>


        <div className="benefit-grid">

          <div className="benefit-card">

            <div className="benefit-icon">
              ✓
            </div>

            <h3>
              Simple Process
            </h3>

            <p>
              Easy and guided process from start to completion.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              ✓
            </div>

            <h3>
              Expert Assistance
            </h3>

            <p>
              Get professional guidance throughout the application process.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              ✓
            </div>

            <h3>
              Transparent Process
            </h3>

            <p>
              Know exactly what's required and what happens at every step.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              ✓
            </div>

            <h3>
              Complete Support
            </h3>

            <p>
              Get assistance until your service is completed.
            </p>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="service-information">

        <div className="service-info">

          <h2>
            About This Service
          </h2>

          <p>
            Udyam Kendra provides simple, transparent and professional
            assistance for businesses. Our team helps you understand the
            process, prepare what's required and complete the necessary
            formalities.
          </p>


          <h2>
            What We'll Need From You
          </h2>

          <div className="document-list">

            {service.requirements.map((item) => (
              <div key={item}>✓ {item}</div>
            ))}

          </div>


          <h2>
            Our Process
          </h2>

          <div className="process-list">

            <div>

              <span>01</span>

              <h3>
                Submit Your Details
              </h3>

              <p>
                Provide your basic information and requirements.
              </p>

            </div>


            <div>

              <span>02</span>

              <h3>
                Share Information
              </h3>

              <p>
                Submit the details required for the selected service.
              </p>

            </div>


            <div>

              <span>03</span>

              <h3>
                Application Processing
              </h3>

              <p>
                Our team assists with the application and required formalities.
              </p>

            </div>


            <div>

              <span>04</span>

              <h3>
                Service Completion
              </h3>

              <p>
                Receive confirmation or the required certificate.
              </p>

            </div>

          </div>

        </div>


        {/* ================= ENQUIRY FORM ================= */}

        <div
          className="enquiry-card"
          id="enquiry"
        >

          <h2>
            Get Started
          </h2>

          <p>
            Fill in your details and our team will contact you.
          </p>


          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
            />


            <input
              type="text"
              name="location"
              placeholder="City / Location"
              value={formData.location}
              onChange={handleChange}
              required
            />


            <textarea
              name="requirement"
              rows="4"
              placeholder="Tell us about your requirement"
              value={formData.requirement}
              onChange={handleChange}
            ></textarea>


            <button
              type="submit"
              className="primary-btn"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="service-faq">

        <div className="section-title">

          <p className="tagline">
            FAQ
          </p>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Find answers to common questions about this service.
          </p>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpenFaq(
                    openFaq === index
                      ? null
                      : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                <span>
                  {openFaq === index
                    ? "−"
                    : "+"}
                </span>

              </button>


              {openFaq === index && (

                <div className="faq-answer">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="services-cta">

        <h2>
          Need Help With Your Business?
        </h2>

        <p>
          Our team can help you choose the right service for your business.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("enquiry")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          Talk to an Expert
        </button>

      </section>

    </div>
  );
}

export default ServicePage;
