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
    <section>
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
              <p className='legend'>{images.fileNames[idx]}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export function importAllImgs(r) {
  var imgUrl = {};
  var fileNames = [];
  r.keys().map((item) => {
    fileNames.push(item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, ''));
    imgUrl = r.keys().map(r);
  });
  return { fileNames, imgUrl };
}
