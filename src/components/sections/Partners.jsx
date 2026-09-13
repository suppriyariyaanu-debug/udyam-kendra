import BrandMark from '../ui/BrandMark'
import SectionHead from '../ui/SectionHead'
import { partners } from '../../data/company'

function Partners({ id = 'partners' }) {
  return (
    <section className="section section--tight" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Our Partners"
          title="Working alongside"
          description="Specialist partners we work with to deliver across legal, finance and technology."
          center
        />

        <div className="partner-grid">
          {partners.map((partner) => (
            <BrandMark key={partner.name} src={partner.logo} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
