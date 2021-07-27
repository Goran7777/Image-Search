import React from 'react';
import { IImage } from './App';

import './ImagesList.scss';

interface IProps {
  imagesArr: Array<IImage>;
}

const ImageList = ({ imagesArr }: IProps) => {
  const images = imagesArr.map(({ id, urls, description }) => {
    return (
      <img
        className="images-container-image"
        key={id}
        src={urls.regular}
        alt={description}
      />
    );
  });
  return <div className="images-container">{images}</div>;
};

export default ImageList;
