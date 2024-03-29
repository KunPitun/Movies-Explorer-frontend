import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links-container'>
          <li className='nav-tab__link-element'>
            <a href='#main-about-project' className='nav-tab__link'>О проекте</a>
          </li>
          <li className='nav-tab__link-element'>
            <a href='#main-technologies' className='nav-tab__link'>Технологии</a>
          </li>
          <li className='nav-tab__link-element'>
            <a href='#main-student' className='nav-tab__link'>Студент</a>
          </li>
        </ul>
    </nav>
  );
}

export default NavTab;