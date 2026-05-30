const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
]

export default function Nav() {
  return (
    <nav>
      <a href="#top" className="brand">
        <span className="dot" />
        satya.dev
      </a>
      <div className="links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="cta">
        contact →
      </a>
    </nav>
  )
}
