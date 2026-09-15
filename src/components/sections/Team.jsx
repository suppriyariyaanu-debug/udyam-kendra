import Avatar from '../ui/Avatar'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { team, teamIntro } from '../../data/company'

/**
 * The team.
 *
 * Four across on desktop, two on tablet, a swipeable rail on phones. Every
 * portrait is cropped to the same square by the Avatar component, so photos
 * of different dimensions still line up.
 */
function Team({ id = 'team' }) {
  return (
    <section className="section section--paper" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Our Team"
          title="The people behind Udyama Kendra"
          description={teamIntro}
          center
        />

        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 70}>
              <Avatar src={member.image} name={member.name} />
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
