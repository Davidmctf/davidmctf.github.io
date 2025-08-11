
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/davidmctf.github.io/',
  locale: "es-MX",
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/portfolio/pages/pages.routes.ts": [
    "chunk-OBM77ITP.js",
    "chunk-AAAKT6ZL.js"
  ],
  "src/app/portfolio/portfolio.routes.ts": [
    "chunk-UDPHQ2IM.js",
    "chunk-AAAKT6ZL.js"
  ]
},
  assets: {
    'index.csr.html': {size: 10761, hash: '34e47480af142aa035642c55f97ca606cbc4e7f12f07c99bd84f5582eb071cba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7449, hash: 'bd761c4c89e9fe72a07ef07d588e76d6ed34eadb228a767afd5e576414270ec2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6JNTSBK5.css': {size: 419760, hash: 'sGWLrXkvy9U', text: () => import('./assets-chunks/styles-6JNTSBK5_css.mjs').then(m => m.default)}
  },
};
