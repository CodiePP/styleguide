// German translation of styleguide.js


function toggle_elem(e) {
  if (e.style.display == 'none') {
    e.style.display = 'block';
  } else {
    e.style.display = 'none';
  }
}

function toggle_elements(lang, tag) {
  var es = document.getElementsByTagName(tag);
  var e
  for (var i = 0; i < es.length; i++) {
    e = es[i];
    if (e.getAttribute('lang')==lang) {
      toggle_elem(e);
    }
  }
}

function toggle_lang(lang) {

  toggle_elements(lang, 'p');
  toggle_elements(lang, 'li');
  toggle_elements(lang, 'ul');
  toggle_elements(lang, 'dt');
  toggle_elements(lang, 'dl');
  toggle_elements(lang, 'dd');

}


