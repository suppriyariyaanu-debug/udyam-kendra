import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import Team from '../components/sections/Team'
import Partners from '../components/sections/Partners'
import Testimonials from '../components/sections/Testimonials'
import CtaBand from '../components/sections/CtaBand'
import { categories } from '../data/catalogue'
import { company, differentiators, pillars, positioning } from '../data/company'

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <span aria-current="page">About Us</span>
          </nav>

          <p className="eyebrow">{positioning.eyebrow}</p>
          <h1>
            A single window for
            <span> Indian business</span>
          </h1>
          <p className="page-hero__lede">{positioning.statement}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="prose">
            <h2>What we do</h2>
            <p>{positioning.servicesIntro}</p>
            <p>
              From incorporation and licences through to filings, intellectual property,
              technology and finance, Udyama Kendra spans {categories.length} service
              categories — so a growing business does not have to hold relationships with a
              different specialist for every requirement.
            </p>

            <div className="about-facts">
              <div className="about-fact">
                <Icon name="globe" size={18} />
                <div>
                  <strong>Where we work</strong>
                  <span>{company.locations.join(' · ')}</span>
                </div>
              </div>
              <div className="about-fact">
                <Icon name="clock" size={18} />
                <div>
                  <strong>Office hours</strong>
                  <span>{company.hours}</span>
                </div>
              </div>
              <div className="about-fact">
                <Icon name="phone" size={18} />
                <div>
                  <strong>Talk to us</strong>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </div>
              <div className="about-fact">
                <Icon name="mail" size={18} />
                <div>
                  <strong>Write to us</strong>
                  <a href={company.emailHref}>{company.email}</a>
                </div>
              </div>
            </div>
          </div>

          <aside className="about-aside">
            <h3>Categories we cover</h3>
            <ul className="about-cats">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link to={`/services/category/${category.slug}`}>
                    <span className="about-cats__icon">
                      <Icon name={category.icon} size={17} />
                    </span>
                    <span>
                      <strong>{category.name}</strong>
                      <span>{category.tagline}</span>
                    </span>
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* The six service pillars, with the descriptions the business published. */}
      <section className="section section--paper">
        <div className="container">
          <SectionHead
            eyebrow="Our Services"
            title="Six pillars of support"
            description={positioning.servicesIntro}
            center
          />

          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 60}>
                <Link to={`/services/category/${pillar.categorySlug}`} className="card card--link">
                  <span className="card__icon">
                    <Icon name={pillar.icon} size={22} />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <span className="card__foot">
                    <span className="link-arrow">
                      Explore
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What Makes Us Different"
            title="Why businesses stay with us"
            description={positioning.differenceIntro}
            center
          />
          <div className="difference-grid">
            {differentiators.map((item, index) => (
              <Reveal className="difference" key={item.title} delay={index * 50}>
                <span className="difference__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3>{item.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Testimonials />
      <Partners />
      <CtaBand />
    </>
  )
}

export default About
