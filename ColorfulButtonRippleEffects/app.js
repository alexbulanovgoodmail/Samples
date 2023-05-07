const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.onclick = function (e) {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);

    const ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    ripples.style.borderColor = color;

    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 2000);
  };
});
