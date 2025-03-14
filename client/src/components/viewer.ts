// filepath: /3DSDRF/3DSDRF/client/src/components/viewer.ts
import * as THREE from 'three';
import { io } from 'socket.io-client';

class Viewer {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private videoTexture: THREE.VideoTexture;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.socket = io('http://localhost:3001'); // Adjust the URL as needed
        this.setupSocketListeners();
    }

    private setupSocketListeners() {
        this.socket.on('frame', (videoFrame: Uint8Array) => {
            this.updateTexture(videoFrame);
        });
    }

    private updateTexture(videoFrame: Uint8Array) {
        // Logic to update the video texture with the received frame
        // This is a placeholder for the actual implementation
    }

    public render() {
        requestAnimationFrame(() => this.render());
        this.renderer.render(this.scene, this.camera);
    }
}

const viewer = new Viewer();
viewer.render();