const workbox = require("workbox-build");

workbox.generateSW({
    cacheId: "katalyst",
    globDirectory: "./",
    globPatterns: [
        "**/*.{css, js}"
    ],
    globIgnores:[
        "**/gen.js", "**/sw.js", "**/node_modules/**/*"
    ],
    swDest: "./sw.js",
    runtimeCaching:[
        {
            urlPattern: /\. (?:html|xml)$/,
            handler:"StaleWhileRevalidate",
            options:{
                cacheName: "markup",
                expiration: {
                    maxAgeSeconds: 1800
                }
            }

        }
    ]
})