import { useHistory } from 'react-router-dom';

export function HomeButton({ buttonImg }) {
  const history = useHistory();
  const backHome = () => {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <section onClick={backHome} className='home-button'>
      <img src={require(`../assets/imgs/elements/home-${buttonImg}.png`)} alt='back home' />
    </section>
  );
}
