
export const addImage = (imgSrc) => {
  return new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.src = imgSrc;
    imgElem.setAttribute('alt', 'My Photo');
  
    const containerElem = document.querySelector('.page');
    
    containerElem.append(imgElem);
    
    const onImageLoaded = () => resolve({ width: imgElem.width, height: imgElem.height })
  
    imgElem.addEventListener('load', onImageLoaded);
    
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  })
};