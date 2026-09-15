import { Link } from 'react-router-dom'
import Accordion from '../ui/Accordion'
import Icon from '../ui/Icon'
import SectionHead from '../ui/SectionHead'
import { homeFaqs } from '../../data/journeys'
import { company } from '../../data/company'

function FaqSection() {
  return (
    <section className="section section--paper" id="faq">
      <div className="container faq-layout">
        <div className="faq-layout__intro">
          <SectionHead
            eyebrow="FAQ"
            title="Questions we get asked"
            description="If yours is not here, our team will answer it directly."
          />
          <div className="faq-contact">
            <a href={company.phoneHref} className="faq-contact__row">
              <Icon name="phone" size={16} />
              {company.phone}
            </a>
            <a href={company.emailHref} className="faq-contact__row">
              <Icon name="mail" size={16} />
              {company.email}
            </a>
            <Link to="/contact" className="btn btn--outline btn--sm">
              Ask a question
              <Icon name="arrowRight" size={15} />
            </Link>
          </div>
        </div>

        <div className="faq-layout__list">
          <Accordion items={homeFaqs} />
        </div>
      </div>
    </section>
  )
}

export default FaqSection
