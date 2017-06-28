// Chrome's currently missing some useful cache methods; this polyfill adds 'em.


// Here comes the install event! This only happens once, when the browser sees
// this version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {

    // Only one version of your app can run at once. That's often useful, but we
    // don't need it right now. `self.skipWaiting` called within a ServiceWorker
    // means it won't wait for tabs to stop using the old version before it
    // takes over.
    if (self.skipWaiting) {
        self.skipWaiting();
    }

    // We pass a promise to event.waitUntil to signal how long install takes,
    // and if it failed
    event.waitUntil(

        // We open a cache…
        caches.open('simple-sw-v4').then(function(cache) {

            // And add resources to it
            return cache.addAll([
                '/',
                '/assets/js/logging.js',
                '/assets/css/main.css',
                '/assets/video/house-house--glitch.mp4',
                '/assets/img/glitch.jpg',
                '/assets/img/housecss-logo.png',
                '/assets/img/project--kost.jpg',
                '/assets/img/project--bitchpop.gif',
                '/assets/img/project--stanford.jpg',
                '/assets/img/project--askwill.gif',
                '/assets/img/project--blancink.jpg',
                '/assets/img/project--lawnpartyfilms.jpg',
                '/assets/img/portrait--ben-groulx--animated.gif',
                '/assets/img/portrait--sean-durfee--animated.gif',
                '/assets/img/portrait--caitlin-farquharson--animated.gif',
                '/assets/img/parrot.gif'
            ]);
        })
    );
});


// The fetch event happens for the page request with the ServiceWorker's scope,
// and any request made within that page
self.addEventListener('fetch', function(event) {

    // Calling event.respondWith means we're in charge of providing the
    // response. We pass in a promise that resolves with a response object
    event.respondWith(

        // First we look for something in the caches that matches the request
        caches.match(event.request).then(function(response) {

            // If we get something, we return it, otherwise it's null, and we'll
            // pass the request to fetch, which will use the network.
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhiteList = ['simple-sw-v4'];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if(cacheWhiteList.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
})
