import { useState } from "react";
import { useParams } from "react-router-dom";

const serviceData = {
  company: {
    title: "Company Registration",
    category: "START YOUR BUSINESS",
    description:
      "Register your company with professional assistance and start your business with confidence.",
    price: "₹999",
  },

  llp: {
    title: "LLP Registration",
    category: "START YOUR BUSINESS",
    description:
      "Set up your Limited Liability Partnership with a simple and guided registration process.",
    price: "₹999",
  },

  gst: {
    title: "GST Registration",
    category: "TAX & GST",
    description:
      "Get your GST registration completed quickly with professional assistance.",
    price: "₹499",
  },

  udyam: {
    title: "Udyam Registration",
    category: "BUSINESS REGISTRATION",
    description:
      "Register your MSME business and get your Udyam Registration certificate.",
    price: "₹299",
  },

  fssai: {
    title: "FSSAI Registration",
    category: "BUSINESS REGISTRATION",
    description:
      "Get your food business registered with the required FSSAI license.",
    price: "₹999",
  },

  iec: {
    title: "Import Export Code",
    category: "BUSINESS REGISTRATION",
    description:
      "Get your IEC registration to start importing and exporting goods.",
    price: "₹999",
  },

  trademark: {
    title: "Trademark Registration",
    category: "PROTECT YOUR BRAND",
    description:
      "Protect your brand name, logo and identity with trademark registration.",
    price: "₹999",
  },

  itr: {
    title: "Income Tax Return Filing",
    category: "TAX & COMPLIANCE",
    description:
      "File your income tax returns accurately with professional assistance.",
    price: "₹499",
  },
};

function ServicePage() {
  const { serviceId } = useParams();

  const service =
    serviceData[serviceId] || serviceData.company;

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
      question: "What documents are required?",
      answer:
        "The documents required depend on the selected service. Generally, PAN Card, Aadhaar Card, address proof, business details and bank details may be required.",
    },
    {
      question: "How does the process work?",
      answer:
        "Submit your basic details, share the required documents and our team will guide you through the application and completion process.",
    },
    {
      question: "How long does the service take?",
      answer:
        "The processing time depends on the type of service and the respective government authority. Our team will provide guidance throughout the process.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Where applicable, you will receive the relevant registration certificate or confirmation after successful completion of the process.",
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
            <strong>{service.price}</strong>
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
              Documentation Support
            </h3>

            <p>
              Understand the documents required for your service.
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
            process, prepare the required documents and complete the
            necessary formalities.
          </p>


          <h2>
            Documents Required
          </h2>

          <div className="document-list">

            <div>✓ PAN Card</div>

            <div>✓ Aadhaar Card</div>

            <div>✓ Address Proof</div>

            <div>✓ Business Details</div>

            <div>✓ Bank Account Details</div>

            <div>✓ Mobile Number & Email</div>

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
                Share Documents
              </h3>

              <p>
                Submit the documents required for the selected service.
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