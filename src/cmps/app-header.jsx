// import background from '../assets/imgs/elements/header-ilus.png';

import { withRouter } from 'react-router-dom';

function _AppHeader({ history }) {
  const pathName = history.location.pathname;

  function setBackgroundImg() {
    const img = pathName.split('/')[1];
    const bgImg = require(`../assets/imgs/elements/header-${img}.png`);
    return bgImg;
  }

  const backHome = () => {
    if (pathName !== '/') {
      history.push('/');
    }
  };

  function showHeader() {
    if (pathName === '/') return <></>;
    else
      return (
        <section className='app-header container' style={{ backgroundImage: `url(${setBackgroundImg()})` }}>
          <img
            onClick={backHome}
            className='logo'
            src={require('../assets/imgs/elements/logo.png')}
            alt='rina-bina logo'
          />
        </section>
      );
  }

  return showHeader();
}

export const AppHeader = withRouter(_AppHeader);
