import { ImageCarousel, importAllImgs } from '../cmps/images-carousel';

export function BrandingPage() {
  const images = importAllImgs(
    require('../assets/imgs/branding/images.json'),
    require.context('../assets/imgs/branding/', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section className='branding-carousel'>
      <ImageCarousel images={images}></ImageCarousel>
    </section>
  );
}
