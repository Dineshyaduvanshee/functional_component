import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDObjectComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create multiple cubes
    const numCubes = 5;
    const cubes = [];
    const cubeSize = 1.5;

    // Array of colors for each cube
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff]; // Example colors: red, green, blue, yellow, magenta

    for (let i = 0; i < numCubes; i++) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const material = new THREE.MeshBasicMaterial({ color: colors[i % colors.length] }); // Set color based on index
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (i - (numCubes - 1) / 2) * 3; // Spread cubes out along x-axis
      cubes.push(cube);
      scene.add(cube);
    }

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate all cubes
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '400px' }}>
      {/* This is where the 3D scene will be rendered */}
    </div>
  );
};

export default ThreeDObjectComponent;
