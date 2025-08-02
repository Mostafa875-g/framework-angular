
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/framework-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/framework-angular/home",
    "route": "/framework-angular"
  },
  {
    "renderMode": 2,
    "route": "/framework-angular/home"
  },
  {
    "renderMode": 2,
    "route": "/framework-angular/about"
  },
  {
    "renderMode": 2,
    "route": "/framework-angular/contact"
  },
  {
    "renderMode": 2,
    "route": "/framework-angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/framework-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5429, hash: '769929788e958ac3a19c8124ed1896c68832e92f631f5ff6702a2028e06170d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '8aeabab8b5319cb379f927dd823f4743192bff89b69d7693fdeec84bf2704ea7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18572, hash: '3428d3f3c1dd0fd79f29fccab3b63a5cd7732c1bc62f190422b98445ea29bdcc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18479, hash: '4ab00ba9948c5b2bad85c31a91dd510312a81964f889e94c47372d8d5900cb33', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 20593, hash: '76b1b11e51ef371f19e5f257f3633ff0fe180bdf652d3e8884744c6d4840b0a9', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18765, hash: '63f8500a1811714b9243f01dabcbe4d794e6899fe56e67d182f923803f7c91f8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-OIUYLRU2.css': {size: 305206, hash: '5mWqibubV/0', text: () => import('./assets-chunks/styles-OIUYLRU2_css.mjs').then(m => m.default)}
  },
};
