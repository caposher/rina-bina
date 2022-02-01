import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ImageLightBox } from './image-lightbox';
import { useState } from 'react';

export const ImageCarousel = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIdx, setShowIdx] = useState(0);
  const onClick = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };
  const handleClick = (idx) => {
    setShowIdx(idx);
    onClick();
  };

  return (
    <section className='image-carousel'>
      <ImageLightBox images={images} isOpen={isOpen} index={showIdx} onClick={onClick}></ImageLightBox>
      <Carousel
        onClickItem={handleClick}
        showIndicators={false}
        emulateTouch={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
      >
        {images.imgUrl.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt='' />
              <p className='legend'>{images.titles[idx]}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export function importAllImgs(json, file) {
  var imgUrl = {};
  var titles = [];
  file.keys().map((item) => {
    const fileName = item.replace('./', '');
    const idx = json.findIndex((item) => {
      return item.fileName === fileName;
    });
    titles.push(json[idx] ? json[idx].title : '');
    imgUrl = file.keys().map(file);
  });
  return { titles, imgUrl };
}
