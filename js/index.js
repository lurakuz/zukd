const clock = document.createElement('div');
clock.className = 'clock';
document.querySelector('header').appendChild(clock);
setInterval( () => clock.innerText = (new Date().toLocaleTimeString()), 1000);