const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');

    const imgs = event.currentTarget.querySelectorAll('img');

    imgs.forEach((img) => {
      if (img.src.includes('/assets/images/icon-plus.svg')) {
        img.src = '/assets/images/icon-minus.svg';
      } else {
        img.src = '/assets/images/icon-plus.svg';
      }
    });
  });
});
