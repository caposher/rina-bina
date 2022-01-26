import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function _NavBar({ showMenu, toggleMenu, history }) {
  const pages = [
    { link: 'branding', txt: 'Branding' },
    { link: 'illustrations', txt: 'Illustration' },
    { link: 'recommendations', txt: 'Recommendations' },
    { link: 'contact', txt: 'Contact me' },
  ];

  const elBody = document.querySelector('body');
  function doShowMenu() {
    showMenu ? elBody.classList.add('scroll-prev') : elBody.classList.remove('scroll-prev');
    return showMenu ? 'show' : '';
  }

  if (history.location.pathname === '/') return <></>;
  return (
    <section>
      {!showMenu && (
        <button onClick={toggleMenu} className='nav-btn'>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <nav onClick={toggleMenu} className={`nav-bar ${doShowMenu()}`}>
        {pages.map((page, idx) => {
          return (
            <section className='page-link' key={page.txt}>
              <img src={require(`../assets/imgs/elements/button${idx + 1}.png`)} alt={`${page.link}`} />
              <NavLink activeClassName='link-active' to={`/${page.link}/`}>
                {page.txt}
              </NavLink>
            </section>
          );
        })}
      </nav>
    </section>
  );
}

export const NavBar = withRouter(_NavBar);
