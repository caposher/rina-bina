import { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const ImageLightBox = ({ images, isOpen, index, onClick }) => {
  const [photoIndex, setPhotoIndex] = useState(index);

  useEffect(() => {
    setPhotoIndex(index);
  }, [index]);

  const { imgUrl } = images;
  if (!isOpen) return <></>;
  return (
    <Lightbox
      mainSrc={imgUrl[photoIndex]}
      nextSrc={imgUrl[(photoIndex + 1) % imgUrl.length]}
      prevSrc={imgUrl[(photoIndex + imgUrl.length - 1) % imgUrl.length]}
      onCloseRequest={onClick}
      onMovePrevRequest={() => setPhotoIndex((photoIndex + imgUrl.length - 1) % imgUrl.length)}
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgUrl.length)}
    />
  );
};
