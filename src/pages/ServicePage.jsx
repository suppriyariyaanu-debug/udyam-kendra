import { useParams } from "react-router-dom";

function ServicePage() {
  const { serviceId } = useParams();

  return (
    <div className="service-page">

      {/* Service Hero */}
      <section className="service-hero">
        <div className="service-hero-content">

          <p className="tagline">
            UDYAM KENDRA SERVICES
          </p>

          <h1>
            {serviceId === "gst"
              ? "GST Registration"
              : serviceId === "company"
              ? "Company Registration"
              : serviceId === "udyam"
              ? "Udyam Registration"
              : serviceId === "fssai"
              ? "FSSAI Registration"
              : serviceId === "trademark"
              ? "Trademark Registration"
              : serviceId === "itr"
              ? "Income Tax Return Filing"
              : "Business Service"}
          </h1>

          <p>
            Get professional assistance for your business
            registration and compliance requirements.
          </p>

          <button className="primary-btn">
            Get Started
          </button>

        </div>
      </section>


      {/* Service Information */}
      <section className="service-information">

        <div className="service-info">

          <h2>
            About This Service
          </h2>

          <p>
            Udyam Kendra provides simple, transparent and
            professional assistance for businesses. Our team
            helps you understand the process, prepare the
            required documents and complete the necessary
            formalities.
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

          </div>


          <h2>
            Our Process
          </h2>

          <div className="process-list">

            <div>
              <span>01</span>
              <h3>Submit Your Details</h3>
              <p>
                Provide your basic information and requirements.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Share Documents</h3>
              <p>
                Submit the documents required for the service.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Application Processing</h3>
              <p>
                Our team assists with the application process.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Service Completion</h3>
              <p>
                Receive confirmation or the required certificate.
              </p>
            </div>

          </div>

        </div>


        {/* Enquiry Form */}
        <div className="enquiry-card">

          <h2>
            Get Started
          </h2>

          <p>
            Fill in your details and our team will contact you.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              alert(
                "Thank you! Our team will contact you soon."
              );
            }}
          >

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Business Name"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your requirement"
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

    </div>
  );
}

export default ServicePage;