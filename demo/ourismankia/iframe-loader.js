(() => {
  var stdModalEventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';

  var urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.get('fe_std') || !urlParams.get('fe_dcv_uuid')) return;

  document.querySelector('body').style.overflow = 'hidden';

  var stdModalStyle = document.createElement('style');
  stdModalStyle.innerHTML = `#std-wrapper{margin:0;padding:0;}#std-wrapper>div{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;margin:0;padding:0;z-index:10001;}#std-wrapper>div>div{width:480px;position:relative;margin:0 auto 50px;margin-top:2vh;padding:0;border-radius:4px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.3);box-sizing:border-box;-webkit-box-sizing:border-box;}@media only screen and (max-width:991px){#std-wrapper>div>div{width:85vw!important;}}#std-wrapper>div>div>iframe{border:0;width:100%;height:480px;}#std-close{position:absolute;right:16px;top:16px;width:20px;height:20px;opacity:0.5;cursor:pointer;}#std-close:hover{opacity:1;}#std-close:before,#std-close:after{position:absolute;left:9px;content:' ';height:20px;width:2px;background-color:#6b7073;}#std-close:before{transform:rotate(45deg);}#std-close:after{transform:rotate(-45deg);}@-webkit-keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}#std-loading {position:absolute;margin:0;top:0;right:0;bottom:0;left:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}#std-loading > div {top:50%;margin-top:-21px;width:100%;text-align:center;position:absolute;}#std-loading > div > svg {height:42px;width:42px;-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite;}#std-loading > div > svg > circle {-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#409eff;stroke-linecap:round;}#std-bg{position:fixed;left:0;top:0;width:100%;height:100%;opacity:0.75;background:#000;margin:0;padding:0;z-index:10000;}`;
  document.querySelector('body').appendChild(stdModalStyle);

  var stdModal = document.createElement('div');
  stdModal.innerHTML = `<div id="std-wrapper"><div><div><div id="std-loading"><div><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div><div id="std-close"></div></div></div></div><div id="std-bg" tabindex="0"></div>`;
  document.querySelector('body').appendChild(stdModal);

  var closeStdModal = () => {
    stdModal.parentNode.removeChild(stdModal);
    stdModalStyle.parentNode.removeChild(stdModalStyle);
    document.querySelector('body').style.overflow = '';
  };

  document.getElementById('std-close')[stdModalEventMethod](window.addEventListener ? 'click' : 'onclick', closeStdModal);

  var stdModalIframe = document.createElement('iframe');
  stdModalIframe.src = `https://gateway.foureyes.io/2020-api/production/test-drive/${urlParams.get('fe_dcv_uuid')}`;
  stdModalIframe[stdModalEventMethod](window.addEventListener ? 'load' : 'onload', () => {
    var loading = document.getElementById('std-loading');
    loading.parentNode.removeChild(loading);

    window[stdModalEventMethod](window.addEventListener ? 'message' : 'onmessage', (e) => {
      var data;
      try { data = JSON.parse(e.data); } catch (err) {}
      if (data) {
        if (data.event === 'fe_std_close') closeStdModal();
        else if (data.event === 'fe_std_resize') stdModalIframe.style.height = data.height + 'px';
      }
    }, false);
  });
  document.querySelector('#std-wrapper > div > div').appendChild(stdModalIframe);
})();
