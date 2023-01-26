import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
// import the needed modules, apis, and libraries to make objects apear to come out of the screen
// Import Three.js library


// The goal is to get the camera from the computer to detect facial landmarks and extract several variables from it.
// The variables are:
// 1. The distance between the eyes and the center of the computer screen. In other words, the Z-Axis Distance between the computer and the user's point of view.
// 2. The mood of the user. This is done by using the OpenAI API to analyze the user's facial expression.
// 3. The user's age. This is done by using the OpenAI API to analyze the user's facial expression.
// 4. The direction of the user's gaze. This is done by using the OpenAI API to analyze the user's facial expression.

// Let's 
    // Include the OpenCV library
    <script src="opencv.js"></script>

    // Initialize the camera
    let video = document.getElementById('video');
    let camera = new cv.VideoCapture(video);

    // Create a face detector
    let faceCascade = new cv.CascadeClassifier();

    // Load the cascade file from the local directory
    faceCascade.load('haarcascade_frontalface_default.xml');

    // Start capturing frames from the camera
    function startCamera() {
        camera.open(video, (err) => {
            if (err) throw err;

            setInterval(() => {
                camera.read((err, im) => {
                    if (err) throw err;

                    // Detect faces in the image using the loaded cascade file 
                    let faces = faceCascade.detectMultiScale(im);

                    // Draw rectangles around each detected face 
                    for (let i = 0; i < faces.length; i++) { 
                        let x = faces[i].x; 
                        let y = faces[i].y; 
                        let w = faces[i].width; 
                        let h = faces[i].height; 

                        im.drawRectangle(new cv.Point(x, y), new cv.Point(x + w, y + h), [255, 0, 0], 2); 
                    }

                    // Display the image with detected faces on screen  
                    cv.imshow('canvasOutput', im);  

                });  

            }, 100);  

        });  

    }  

    startCamera(); 
    
    import * as THREE from 'three';

// Import OrbitControls library
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create a scene and camera 
const scene = new THREE.Scene(); 
const userViewCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
camera.position.z = 5; 

// Create a renderer and add it to the DOM 
const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement ); 

 // Create an orbit control that allows us to move around the scene 
 const controls = new OrbitControls( camera, renderer.domElement );

 // Create a cube and add it to the scene  
 const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
 const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
 const cube = new THREE.Mesh( geometry, material ); 

 // Set the position of the cube so it appears to come out of the screen  
 cube.position.z -= 3;  

 // Add the cube to the scene  
 scene.add( cube );
    // Path: openai-quickstart-node/pages/Untitled-1.js}

    // Path: openai-quickstart-node/pages/Untitled-1.js
    // Compare this snippet from openai-quickstart-node/pages/index.js:
    // import Head from "next/head";
    // import { useState } from "react";
    // import styles from "./index.module.css";
    //


