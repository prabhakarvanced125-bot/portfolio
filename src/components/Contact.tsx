import Reveal from './Reveal'

const contacts = [
  {
    label: 'Email',
    value: 'satyasivasaik@gmail.com',
    href: 'mailto:satyasivasaik@gmail.com',
  },
  {
    label: 'Phone',
    value: '704-453-8005',
    href: 'tel:+17044538005',
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
        Open to software engineering roles focused on React, TypeScript, secure frontend systems,
        accessibility, testing, and cloud-backed delivery.
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
          <span>React · TypeScript · React Native</span>
        </div>
      </footer>
    </Reveal>
  )
}
