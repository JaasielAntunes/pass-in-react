import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2 px-4">
      <img src={nlwUniteIcon} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos" className="text-sm">
          Eventos
        </NavLink>
        <NavLink
          href="/participantes"
          className="text-sm font-bold text-green-500"
        >
          Participantes
        </NavLink>
      </nav>
    </div>
  )
}
