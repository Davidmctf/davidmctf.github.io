import { a as p } from "./chunk-AAAKT6ZL.js";
import { ca as n, wa as r } from "./chunk-EMCNKSJW.js";
var i = (() => {
  let e = class e {};
  ((e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵcmp = n({
      type: e,
      selectors: [["app-main"]],
      decls: 1,
      vars: 0,
      template: function (o, m) {
        o & 1 && r(0, "app-layout");
      },
      dependencies: [p],
      encapsulation: 2,
      changeDetection: 0,
    })));
  let t = e;
  return t;
})();
var C = [
  {
    path: "",
    component: i,
    loadChildren: () => import("./chunk-OBM77ITP.js").then((t) => t.routes),
  },
];
export { C as routes };
