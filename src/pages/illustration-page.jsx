import { ImageCarousel, importAllImgs } from '../cmps/images-carousel';
export function IllustrationPage() {
  const images = importAllImgs(
    require('../assets/imgs/illustration/images.json'),
    require.context('../assets/imgs/illustration/', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section className='branding-carousel'>
      <ImageCarousel images={images}></ImageCarousel>
    </section>
  );
}
