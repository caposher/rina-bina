import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function CarouselCmp({ dirName }) {
  const imgDir = `../assets/imgs/${dirName}/`;
  function importAll(r) {
    var imgUrl = {};
    var fileNames = [];
    r.keys().map((item) => {
      fileNames.push(item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, ''));
      imgUrl = r.keys().map(r);
    });
    return { fileNames, imgUrl };
  }
  //   const images = importAll(require.context('' + a, false, /\.(png|jpe?g|svg)$/));
  //   const images = importAll(require.context(`../assets/imgs/${}/`, false, /\.(png|jpe?g|svg)$/));
  debugger;

  const test = (ev) => {
    debugger;
  };

  return (
    <section className='branding-carousel'>
      <Carousel onClickItem={test} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false}>
        {images.imgUrl.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt='' />
              <p className='legend'>{images.fileNames[idx]}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
