
let allValues = document.querySelectorAll(".value");

allValues.forEach((singleValue) => {
  let startValue = 0;
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  
  let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;
    
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


document.querySelectorAll('.menu-item').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 50; 

      window.scroll({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


