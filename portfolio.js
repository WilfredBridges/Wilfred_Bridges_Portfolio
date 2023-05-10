const images = [
    '/media/Wilfred1.png',
    '/media/Wilfred2.png',
    '/media/Wilfred3.png',
  ];
  
  let index = 0;
  const imageElement = document.getElementById('image');
  
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.style.backgroundImage = `url(${images[index]})`;
      imageElement.style.opacity = 1;
    }, 500);
  }, 4000);