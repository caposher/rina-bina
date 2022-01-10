import { NavLink } from 'react-router-dom';

export function NavBar({ changeTheme, isHomePage }) {
  const pages = [
    { link: 'branding', txt: 'Branding' },
    { link: 'illustrations', txt: 'Illustration' },
    { link: 'recommendations', txt: 'Recommendations' },
    { link: 'contact', txt: 'Contact me' },
  ];

  function showNav() {
    if (isHomePage) return <></>;
    else
      return (
        <nav className='nav-bar'>
          {pages.map((page, idx) => {
            return (
              <section className='page-link' key={page.txt}>
                <img src={require(`../assets/imgs/elements/button${idx + 1}.png`)} alt={`${page.link}`} />
                <NavLink onClick={() => changeTheme(page.link)} activeClassName='link-active' to={`/${page.link}/`}>
                  {page.txt}
                </NavLink>
              </section>
            );
          })}
        </nav>
      );
  }

  return showNav();
}
