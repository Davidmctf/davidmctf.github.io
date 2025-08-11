
export default {
  basePath: '/davidmctf.github.io',
  supportedLocales: {
  "es-MX": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
