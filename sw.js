const recoveryDate = () => {
    self.addEventListener('fetch', event => {
        // Check if the current request is 2G or slow 2G
        if(/\slow-2g|2g/.test(navigator.connection.effectiveType)) {
            // Check if the request is for an image
            if(/\.jpg$|.jpeg$|.png$|.webp$|.gif$/.test(event.request.url)) {

                // Return no images
                event.respondWith(
                    fetch('placeholder.svg', {
                        mode: 'no-cors'
                    })
                );
            }
        }
    });
}

recoveryDate();