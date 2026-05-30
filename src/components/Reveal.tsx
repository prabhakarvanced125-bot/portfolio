import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
} & Pick<HTMLAttributes<HTMLElement>, 'id'>

export default function Reveal({ children, className = '', id, as: Tag = 'section' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    const fallback = window.setTimeout(() => setVisible(true), 1400)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal${visible ? ' in' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
