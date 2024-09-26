import { Link } from 'react-router-dom'
import '../../styles/_colors/_colors.scss'
import '../../styles/_layout/_layout.scss'
import '../../styles/_responsive/_responsive.scss'
import './_navigate.scss'

const Navigate = () => {
  return (
    <nav className='nav w-100'>
      <span className='mobileMenu' />
      <div className='menu'>
        <ul className='darkText row col-lg-12'>
          <li><img src='img/close.svg' className='closeMobileMenu' id='closeMobileMenu' /></li>
          <li className='active'><Link to='/#aboutMe'>About me</Link></li>
          <li><Link to='/#projects'>Projects</Link></li>
          <li><Link to='/#mySkills'>Skills</Link></li>
          <li><Link to='/#contactMe'>Contact</Link></li>
          <li id='toggleContainer'>
            <div className='darkMode' id='toggle'>
              <span className='switch' />
            </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navigate
