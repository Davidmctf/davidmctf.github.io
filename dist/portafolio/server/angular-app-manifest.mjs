
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/davidmctf.github.io/',
  locale: "es-MX",
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/portfolio/pages/pages.routes.ts": [
    "chunk-PNI6LWO7.js",
    "chunk-INCM6JQ6.js"
  ],
  "src/app/portfolio/portfolio.routes.ts": [
    "chunk-FBBLCAE2.js",
    "chunk-INCM6JQ6.js"
  ]
},
  assets: {
    'index.csr.html': {size: 10761, hash: '3d55559b47b505257bc7f50ced6b463bb8ec5127182570b45e4737fad0509f09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7449, hash: 'a2915086a1c26b8e222c44711d75151327b7127c74e5e2b765cf12767bfabfbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6JNTSBK5.css': {size: 419760, hash: 'sGWLrXkvy9U', text: () => import('./assets-chunks/styles-6JNTSBK5_css.mjs').then(m => m.default)}
  },
};
