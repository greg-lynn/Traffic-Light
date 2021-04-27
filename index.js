const goButton = document.getElementById('goButton')
const slowButton = document.getElementById('slowButton')
const stopButton = document.getElementById('stopButton')

const goLight = document.getElementById('goLight')
const slowLight = document.getElementById('slowLight')
const stopLight = document.getElementById('stopLight')

const goNow = () => {
  goLight.classList.add('green');
  slowLight.classList.remove('yellow');
  stopLight.classList.remove('red');  
}

const slowNow = () => {
  goLight.classList.remove('green');
  slowLight.classList.add('yellow');
  stopLight.classList.remove('red');
}

const stopNow = () => {
  goLight.classList.remove('green');
  slowLight.classList.remove('yellow');
  stopLight.classList.add('red');
}

goButton.addEventListener('click', goNow);
slowButton.addEventListener('click', slowNow);
stopButton.addEventListener('click', stopNow);