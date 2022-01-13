import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function _NavBar({ showMenu, toggleMenu, history }) {
  const pages = [
    { link: 'branding', txt: 'Branding' },
    { link: 'illustrations', txt: 'Illustration' },
    { link: 'recommendations', txt: 'Recommendations' },
    { link: 'contact', txt: 'Contact me' },
  ];

  function doShowMenu() {
    return showMenu ? 'show' : '';
  }

  function preventScrolling() {
    return showMenu ? <div class='scroll-prev'></div> : <></>;
  }

  function showNav() {
    if (history.location.pathname === '/') return <></>;
    else
      return (
        <section>
          {/* {preventScrolling()} */}
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

  return showNav();
}

export const NavBar = withRouter(_NavBar);
