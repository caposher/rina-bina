export function HomePage() {
  return (
    <section className='home-page'>
      <h1 className='title'>WELCOME</h1>
      <section className='images-container'>
        <img src={require('../assets/imgs/elements/branding-page.png')} alt='branding-page' />
        <img src={require('../assets/imgs/elements/ilus-page.png')} alt='illustration-page' />
        <img src={require('../assets/imgs/elements/contact-page.png')} alt='contact-page' />
      </section>
    </section>
  );
}
