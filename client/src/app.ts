// filepath: /3DSDRF/3DSDRF/client/src/app.ts
import * as io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

socket.on('frame', (videoFrame) => {
    // Handle the incoming video frame
    console.log('Received frame:', videoFrame);
});

// Initialize the application
function init() {
    console.log('Client application initialized');
}

init();