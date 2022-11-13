export const addImage = (imgSrc, callback) => {
  const newImg = new Image();
  newImg.src = imgSrc;
  newImg.setAttribute('alt', 'My Photo');
  const containerElem = document.querySelector('.page');
  containerElem.appendChild(newImg);
  
  const onImageLoaded = () => {
    callback(null, newImg);
  }

  newImg.addEventListener('load', onImageLoaded);
  
  newImg.addEventListener('error', () => callback('Image load is failed'));
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
