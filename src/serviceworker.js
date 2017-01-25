// Chrome's currently missing some useful cache methods; this polyfill adds 'em.
importScripts('assets/js/serviceworker-cache-polyfill.js');

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
        caches.open('simple-sw-v1').then(function(cache) {

            // And add resources to it
            return cache.addAll([
                './',
                // 'assets/img/*',
                'assets/css/main.css',
                'assets/js/logging.js'
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
