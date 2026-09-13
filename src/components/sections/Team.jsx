import Avatar from '../ui/Avatar'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { team, teamIntro } from '../../data/company'

function Team({ id = 'team' }) {
  return (
    <section className="section section--paper" id={id}>
      <div className="container">
        <SectionHead eyebrow="Our Team" title="The people behind Udyama Kendra" description={teamIntro} center />

        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 70}>
              <Avatar src={member.image} name={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
