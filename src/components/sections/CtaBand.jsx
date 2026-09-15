import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { company } from '../../data/company'

function CtaBand({
  title = 'Ready to take your business forward?',
  description = 'Talk to a Udyama Kendra expert today.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="cta-band__actions">
          <a href={company.phoneHref} className="btn btn--ghost-light btn--lg">
            <Icon name="phone" size={17} />
            Talk to an Expert
          </a>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Get Started
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
