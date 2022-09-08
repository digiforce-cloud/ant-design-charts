if (!global._babelPolyfill) {
  require('babel-polyfill');
  const createLink = (src) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.className = 'dynamic-link';
    link.href = src;
    document.getElementsByTagName('head')[0].appendChild(link);
  };
  createLink('https://unpkg.com/antd@4.21.1/dist/antd.css');
  createLink('https://unpkg.com/@digiforce-cloud/flowdesigner@1.2.0/dist/index.css');
}
