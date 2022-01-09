// import background from '../assets/imgs/elements/header-ilus.png';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function AppHeader({ backgroundImg }) {
  const history = useHistory();
  const bgImg = require(`../assets/imgs/elements/header-${backgroundImg}.png`);
  const backHome = () => {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <section className='app-header container' style={{ backgroundImage: `url(${bgImg})` }}>
      <img onClick={backHome} className='logo' src={require('../assets/imgs/elements/logo.png')} alt='rina-bina logo' />
    </section>
  );
}
