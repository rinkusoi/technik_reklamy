document.querySelectorAll('.player').forEach(function (p) {
  var frame = p.querySelector('iframe');
  var btns = p.querySelectorAll('.pl button');
  function play(b) {
    btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    frame.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.id;
    frame.title = b.textContent;
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { play(b); }); });
  if (btns[0]) play(btns[0]);
});
