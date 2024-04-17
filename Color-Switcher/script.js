
document.addEventListener('DOMContentLoaded', function () {
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const body = document.body;
  
    // Function to change background color using switch case
    function changeColor(color) {
      switch (color) {
        case 'one':
          body.style.backgroundColor = 'rgb(239, 164, 223)';
          break;
        case 'two':
          body.style.backgroundColor = 'rgb(234, 227, 227)';
          break;
        case 'three':
          body.style.backgroundColor = 'rgb(26, 145, 224)';
          break;
        case 'four':
          body.style.backgroundColor = 'rgb(214, 214, 74)';
          break;
        default:
          body.style.backgroundColor = 'rgb(0, 0, 0)'; // Default color
      }
    }
  
    // Event listeners for color buttons
    one.addEventListener('click', function () {
      changeColor('one');
    });
  
    two.addEventListener('click', function () {
      changeColor('two');
    });
  
    three.addEventListener('click', function () {
      changeColor('three');
    });
  
    four.addEventListener('click', function () {
      changeColor('four');
    });
  });
  


  