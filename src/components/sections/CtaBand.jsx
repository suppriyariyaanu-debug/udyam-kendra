import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { company } from '../../data/company'

function CtaBand({
  title = 'Ready to start your business?',
  description = 'Tell us what you need and our team will guide you to the right service.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to an Expert
            <Icon name="arrowRight" size={18} />
          </Link>
          <a href={company.phoneHref} className="btn btn--ghost-light btn--lg">
            <Icon name="phone" size={17} />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
