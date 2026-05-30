import Reveal from './Reveal'

const contacts = [
  {
    label: 'Email',
    value: 'satyasivasaik@gmail.com',
    href: 'mailto:satyasivasaik@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: '/satya-siva-kotipalli',
    href: 'https://www.linkedin.com/in/satya-siva-kotipalli/',
  },
]

export default function Contact() {
  return (
    <Reveal id="contact" className="contact wrap">
      <h2>
        Let's build
        <br />
        <span className="grad">something solid.</span>
      </h2>
      <p className="lead">
        Open to senior & staff frontend roles, contract work, or a good technical conversation.
      </p>
      <div className="clinks">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            className="clink"
            href={contact.href}
            target={contact.label === 'LinkedIn' ? '_blank' : undefined}
            rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
          >
            <span className="k">{contact.label}</span>
            <span className="v">{contact.value}</span>
          </a>
        ))}
      </div>
      <footer>
        <div className="row">
          <span>© 2026 Satya Kotipalli</span>
          <span>Charlotte, NC</span>
          <span>React · TypeScript · GraphQL</span>
        </div>
      </footer>
    </Reveal>
  )
}
