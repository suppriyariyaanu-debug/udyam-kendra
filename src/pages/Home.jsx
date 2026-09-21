import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Logo from '../components/ui/Logo'
import SearchCommand from '../components/sections/SearchCommand'
import TrustStrip from '../components/sections/TrustStrip'
import ServiceFinder from '../components/sections/ServiceFinder'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProblemSolution from '../components/sections/ProblemSolution'
import BusinessJourney from '../components/sections/BusinessJourney'
import Collaborate from '../components/sections/Collaborate'
import ServiceTabs from '../components/sections/ServiceTabs'
import ServiceRecommender from '../components/sections/ServiceRecommender'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import FaqSection from '../components/sections/FaqSection'
import CtaBand from '../components/sections/CtaBand'
import { getService } from '../data/catalogue'
import { company, trustPoints } from '../data/company'

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
              From starting your business to managing, protecting and growing it, Udyama Kendra
              connects you with the right services, guidance and support at every stage.
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

          {/* The right column carries the brand itself: the company's own logo
              at a size the header cannot give it, its published tagline, and
              the four reasons businesses stay with it. The service-pillar list
              that used to sit here has gone — those six pillars are reachable
              from "What do you need help with?" immediately below, so this
              space now answers "who is this and why them?" instead of
              repeating the catalogue. */}
          <aside className="hero__brand" aria-label="About Udyama Kendra">
            <Logo interactive={false} size="lg" className="hero__brand-logo" />

            <p className="hero__brand-tagline">{company.tagline}</p>

            <p className="hero__brand-label">Why businesses choose us</p>
            <ul className="hero__brand-points">
              {trustPoints.map((point) => (
                <li key={point}>
                  <Icon name="check" size={16} />
                  {point}
                </li>
              ))}
            </ul>

            <p className="hero__brand-foot">
              <Icon name="globe" size={15} />
              {company.locations.join(' · ')}
            </p>
          </aside>
        </div>
      </section>

      {/* Published figures, immediately under the hero. */}
      <TrustStrip />

      {/* Order below follows the approved homepage flow:
          need → why us → problem → how we help you grow → how we collaborate
          → services and solutions → supporting proof → closing CTA. */}
      <ServiceFinder />
      <WhyChooseUs />
      <ProblemSolution />
      <BusinessJourney />
      <Collaborate />

      {/* Services / solutions. `solutions` is the anchor the header links to. */}
      <ServiceTabs id="solutions" />
      <ServiceRecommender />

      <HowItWorks />
      {/* The team section lives on /about (anchored at #team, which is where
          the header's "Team" link points). It is deliberately not repeated
          here — the homepage stays on the customer's business needs. */}
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
