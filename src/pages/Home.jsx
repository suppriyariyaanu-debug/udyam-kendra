import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import SearchCommand from '../components/sections/SearchCommand'
import TrustStrip from '../components/sections/TrustStrip'
import ServiceFinder from '../components/sections/ServiceFinder'
import ServiceTabs from '../components/sections/ServiceTabs'
import ServiceRecommender from '../components/sections/ServiceRecommender'
import BusinessJourney from '../components/sections/BusinessJourney'
import HowItWorks from '../components/sections/HowItWorks'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import FaqSection from '../components/sections/FaqSection'
import CtaBand from '../components/sections/CtaBand'
import { getService } from '../data/catalogue'
import { company, pillars, trustPoints } from '../data/company'

const quickLinks = ['gst', 'udyam', 'company', 'trademark', 'itr']

function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Business today. A stronger tomorrow.</p>

            <h1>
              Your Business Journey
              <span>Our Expertise</span>
            </h1>

            <p className="hero__lede">
              Business registration, MSME, GST, compliance, trademark, banking and digital
              solutions — all under one roof.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Get Started
                <Icon name="arrowRight" size={18} />
              </Link>
              <a href={company.phoneHref} className="btn btn--outline btn--lg">
                <Icon name="phone" size={17} />
                Talk to an Expert
              </a>
            </div>

            <ul className="hero__trust">
              {trustPoints.map((point) => (
                <li key={point}>
                  <Icon name="check" size={15} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="hero__search">
              <SearchCommand />
              <div className="hero__quick">
                <span>Popular:</span>
                {quickLinks.map((slug) => {
                  const service = getService(slug)
                  if (!service) return null
                  return (
                    <Link key={slug} to={`/services/${slug}`} className="hero__quick-link">
                      {service.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* The repository holds no photograph of the business, so rather than
              drop in stock imagery this panel shows what the company actually
              does — the six published service pillars. */}
          <aside className="hero__panel" aria-label="What Udyama Kendra covers">
            <p className="hero__panel-label">Everything under one roof</p>
            <ul className="hero__pillars">
              {pillars.map((pillar) => (
                <li key={pillar.title}>
                  <Link to={`/services/category/${pillar.categorySlug}`}>
                    <span className="hero__pillar-icon">
                      <Icon name={pillar.icon} size={19} />
                    </span>
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hero__panel-foot">
              <span>
                <Icon name="globe" size={15} />
                {company.locations.join(' · ')}
              </span>
              <Link to="/services" className="link-arrow">
                All services
                <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <TrustStrip />
      <ServiceFinder />
      <ServiceTabs />
      <ServiceRecommender />
      <BusinessJourney />
      <HowItWorks />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Partners />
      <FaqSection />

      <CtaBand
        title="Ready to take your business forward?"
        description="Talk to a Udyama Kendra expert today."
      />
    </>
  )
}

export default Home
