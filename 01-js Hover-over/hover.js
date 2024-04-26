function hover(str) {
  let split = str.split('');
  split.forEach((letter) => {
    let span = document.createElement('span');
    span.innerText = letter;
    document.querySelector('h1').appendChild(span);
  });
  let spans = document.querySelectorAll('h1 span');
  spans.forEach((span) => {
    span.addEventListener('mouseover', () => {
      span.classList.add('hover');
    });
    span.addEventListener('mouseleave', () => {
        span.classList.remove('hover');
        
    });
  });
}
hover('Hello Yassir')