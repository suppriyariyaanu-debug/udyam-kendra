function SectionHead({ eyebrow, title, description, center = false, id }) {
  return (
    <header className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export default SectionHead
