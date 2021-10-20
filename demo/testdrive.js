function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const getRTParameter = (scripts) => {
  for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].src;
    const rt = getParameterByName('rt', src);
    if (rt) {
      return rt;
    }
  }
};

var scripts = document.getElementsByTagName('script');
var rt = getRTParameter(scripts);

// var style = `<link rel="stylesheet" href="testdrive.css">`;
var style = `<link rel="stylesheet" href="https://offers.pricehelpers.com/testdrive.css">`;
// var urlMaster = `https://testdrivenow-sandy.vercel.app/?rt=${rt}`;
var urlMaster = `http://localhost:3000/?rt=rec3fb6uC6mZkUcNs`;
var fontcss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
var floatbutton = `<a href="#"  onclick="show('popup2')" class="floatbutton"> <i class="fa fa-plus my-float"></i></a>`;
{
  /* <a href="#" onclick="hide('popup2')"><i class="fa fa-times closebutton"></i></a> */
}
var custpopup = `
<div class="popup" id="popup2">
  <a href="#" onclick="hide('popup2')"><i class="fa fa-times-thin fa-2x closebutton"></i></a>
  <div id="iframe_container">
  <iframe class ="myiframe" src=${urlMaster} name="ifr" scrolling="yes" frameborder="0"></iframe>
  </div>
</div>
`;

var template = style + fontcss + floatbutton + custpopup;
var render = function (template, node) {
  node.innerHTML = template;
};
window.onload = function () {
  render(template, document.querySelector('body'));
};

var show = function (id) {
  let doc = document.getElementById(id);
  doc.style.display = 'block';
};
var hide = function (id) {
  let doc = document.getElementById(id);
  doc.style.display = 'none';
};

window.onscroll = function () {
  frames.ifr.document.documentElement.scrollTop = window.pageYOffset;
  frames.ifr.document.body.scrollTop = window.pageYOffset; // Google Chrome, Safari, documents without valid doctype
};

window.onresize = function () {
  document.body.style.height =
    frames.ifr.document.body.offsetHeight +
    parseInt(document.getElementById('iframe_container').style.top) +
    parseInt(document.getElementById('iframe_container').style.bottom) +
    'px';
};