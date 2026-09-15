import BrandMark from '../ui/BrandMark'
import SectionHead from '../ui/SectionHead'
import { partners } from '../../data/company'

/**
 * Partner marks on a scroll-snap rail.
 *
 * Every tile is the same size and the mark is contained inside it, so a wide
 * logo scales down instead of being clipped — which is what went wrong on the
 * previous mobile layout.
 */
function Partners({ id = 'partners' }) {
  return (
    <section className="section section--tight" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Our Partners"
          title="Working alongside"
          description="Specialist partners we work with across legal, finance and technology."
          center
        />

        <div className="rail rail--logos" tabIndex={0} aria-label="Partner organisations">
          {partners.map((partner) => (
            <BrandMark key={partner.name} src={partner.logo} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
