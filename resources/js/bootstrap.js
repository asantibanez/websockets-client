window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    // broadcaster: 'pusher',
    // key: process.env.MIX_PUSHER_APP_KEY,
    // cluster: process.env.MIX_PUSHER_APP_CLUSTER,

    // Pusher
    //forceTLS: true,

    // wsHost: '137.184.18.17',
    // wsPort: 6001,
    // wssPort: 6001,
    // forceTLS: false,
    // disableStats: true,
    // encrypted: false,
    // enabledTransports: ['ws', 'wss'],

    broadcaster: 'pusher',
    key: 'c45a32b9cf7666e587af',
    wsHost: 'socket.detechtiva.com',
    wsPort: 443,
    wssPort: 443,
    forceTLS: true,
    //disableStats: process.env.MIX_PUSHER_APP_DISABLE_STATS === 'true',
    encrypted: true,
    enabledTransports: ['ws', 'wss'],
});

console.log('Registering Echo')

window.Echo.channel('orders')
    .listen('OrderShipmentStatusUpdated', (e) => {
        console.log(e)
    })

