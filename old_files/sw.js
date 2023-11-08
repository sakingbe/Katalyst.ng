if (!self.define) {
  let s,
    e = {};
  const c = (c, i) => (
    (c = new URL(c + ".js", i).href),
    e[c] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = c), (s.onload = e), document.head.appendChild(s);
        } else (s = c), importScripts(c), e();
      }).then(() => {
        let s = e[c];
        if (!s) throw new Error(`Module ${c} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, a) => {
    const t =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[t]) return;
    let r = {};
    const n = (s) => c(s, t),
      l = { module: { uri: t }, exports: r, require: n };
    e[t] = Promise.all(i.map((s) => l[s] || n(s))).then((s) => (a(...s), r));
  };
}
define(["./workbox-a6408148"], function (s) {
  "use strict";
  s.setCacheNameDetails({ prefix: "katalyst" }),
    self.addEventListener("message", (s) => {
      s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting();
    }),
    s.precacheAndRoute(
      [
        {
          url: "assets/css/nunito.css",
          revision: "a6ac543df7582a5545155cd68fbdd05e",
        },
        {
          url: "assets/css/plugins/animation.css",
          revision: "75045e2c26eaebd7935c4c639ceb066e",
        },
        {
          url: "assets/css/plugins/bootstrap-select.min.css",
          revision: "38139130c76a310a1e36b00883ac2836",
        },
        {
          url: "assets/css/plugins/euclid-circulara.css",
          revision: "02f4ee5472e31d6ee924d0cb294905f8",
        },
        {
          url: "assets/css/plugins/feather.css",
          revision: "4f37dcbcc35f05d41aeefc06e5d5a284",
        },
        {
          url: "assets/css/plugins/fontawesome.min.css",
          revision: "01dd8f3488f6d99544dd0ff971cdaa16",
        },
        {
          url: "assets/css/plugins/jquery-ui.css",
          revision: "79b43d6f3080aec0cda8233a2c905a66",
        },
        {
          url: "assets/css/plugins/magnify.css",
          revision: "54e19e85de54ee7c3946528ab11394a2",
        },
        {
          url: "assets/css/plugins/magnigy-popup.min.css",
          revision: "f60d82c203a64bb80393a3c7580bd4e3",
        },
        {
          url: "assets/css/plugins/odometer.css",
          revision: "d8bbe85959d0bc06be4912bad2c119a0",
        },
        {
          url: "assets/css/plugins/sal.css",
          revision: "81d6217107a4217e822aab7344092940",
        },
        {
          url: "assets/css/plugins/swiper.css",
          revision: "b81bd7368ee30c142a141e23108304af",
        },
        {
          url: "assets/css/style.css",
          revision: "a34ce97105e65ce5f8ecf7cdd5618464",
        },
        {
          url: "assets/css/vendor/404.css",
          revision: "87c052e425204ff67d2024a5a9c0b1eb",
        },
        {
          url: "assets/css/vendor/bootstrap.min.css",
          revision: "1d6e8007783cc50d9fa1bc85e227ca3b",
        },
        {
          url: "assets/css/vendor/slick-theme.css",
          revision: "be4640289aed076aa28a8a3d47709efd",
        },
        {
          url: "assets/css/vendor/slick.css",
          revision: "5cf033bfc5b7a470304730780eb12803",
        },
        {
          url: "test/assets/css/plugins/animation.css",
          revision: "75045e2c26eaebd7935c4c639ceb066e",
        },
        {
          url: "test/assets/css/plugins/bootstrap-select.min.css",
          revision: "38139130c76a310a1e36b00883ac2836",
        },
        {
          url: "test/assets/css/plugins/euclid-circulara.css",
          revision: "02f4ee5472e31d6ee924d0cb294905f8",
        },
        {
          url: "test/assets/css/plugins/feather.css",
          revision: "4f37dcbcc35f05d41aeefc06e5d5a284",
        },
        {
          url: "test/assets/css/plugins/fontawesome.min.css",
          revision: "01dd8f3488f6d99544dd0ff971cdaa16",
        },
        {
          url: "test/assets/css/plugins/jquery-ui.css",
          revision: "79b43d6f3080aec0cda8233a2c905a66",
        },
        {
          url: "test/assets/css/plugins/magnify.css",
          revision: "54e19e85de54ee7c3946528ab11394a2",
        },
        {
          url: "test/assets/css/plugins/magnigy-popup.min.css",
          revision: "f60d82c203a64bb80393a3c7580bd4e3",
        },
        {
          url: "test/assets/css/plugins/odometer.css",
          revision: "d8bbe85959d0bc06be4912bad2c119a0",
        },
        {
          url: "test/assets/css/plugins/sal.css",
          revision: "81d6217107a4217e822aab7344092940",
        },
        {
          url: "test/assets/css/plugins/swiper.css",
          revision: "b81bd7368ee30c142a141e23108304af",
        },
        {
          url: "test/assets/css/style.css",
          revision: "3881ba907292b91e5873a060a618bc31",
        },
        {
          url: "test/assets/css/vendor/404.css",
          revision: "87c052e425204ff67d2024a5a9c0b1eb",
        },
        {
          url: "test/assets/css/vendor/bootstrap.min.css",
          revision: "1d6e8007783cc50d9fa1bc85e227ca3b",
        },
        {
          url: "test/assets/css/vendor/slick-theme.css",
          revision: "be4640289aed076aa28a8a3d47709efd",
        },
        {
          url: "test/assets/css/vendor/slick.css",
          revision: "5cf033bfc5b7a470304730780eb12803",
        },
      ],
      {}
    ),
    s.registerRoute(
      /\. (?:html|xml)$/,
      new s.StaleWhileRevalidate({
        cacheName: "markup",
        plugins: [new s.ExpirationPlugin({ maxAgeSeconds: 1800 })],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
