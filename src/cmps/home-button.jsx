import { withRouter } from 'react-router-dom';

function _HomeButton({ history }) {
  const pathName = history.location.pathname;

  function setBackgroundImg() {
    const img = pathName.split('/')[1];
    const bgImg = require(`../assets/imgs/elements/home-${img}.png`);
    return bgImg;
  }

  const backHome = () => {
    if (pathName !== '/') {
      history.push('/');
    }
  };

  function showBtn() {
    if (pathName === '/') return <></>;
    else
      return (
        <section onClick={backHome} className='home-button'>
          <img src={setBackgroundImg()} alt='back home' />
        </section>
      );
  }

  return showBtn();
}

export const HomeButton = withRouter(_HomeButton);
