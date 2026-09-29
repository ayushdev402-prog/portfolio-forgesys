"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Rotate3d, Server, Zap } from "lucide-react";

export default function Hero3DVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [fps, setFps] = useState(60);
  const [activeBus, setActiveBus] = useState("512-BIT STREAM");

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0C0C0C");

    // Camera - Isometric Perspective
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(5.5, 6.5, 7.5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Main Hardware Cluster Group
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // 1. Base Motherboard Substrate (Matte dark circuit plane)
    const boardGeo = new THREE.BoxGeometry(5.2, 0.15, 5.2);
    const boardMat = new THREE.MeshBasicMaterial({ color: 0x161616 });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.y = -0.5;
    clusterGroup.add(board);

    // Board Edge Line
    const boardEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(boardGeo),
      new THREE.LineBasicMaterial({ color: 0x333333 })
    );
    board.add(boardEdges);

    // Grid Traces on Motherboard
    const gridHelper = new THREE.GridHelper(4.8, 12, 0x2A2A2A, 0x1E1E1E);
    gridHelper.position.y = -0.41;
    clusterGroup.add(gridHelper);

    // 2. Central Microprocessor Die (CPU Core)
    const cpuGeo = new THREE.BoxGeometry(1.8, 0.35, 1.8);
    const cpuMat = new THREE.MeshBasicMaterial({ color: 0x222222 });
    const cpuMesh = new THREE.Mesh(cpuGeo, cpuMat);
    cpuMesh.position.y = -0.25;
    clusterGroup.add(cpuMesh);

    // CPU Die Top Heat-spreader (Orange Accent Line)
    const cpuEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(cpuGeo),
      new THREE.LineBasicMaterial({ color: 0xFD5006, linewidth: 2 })
    );
    cpuMesh.add(cpuEdges);

    // Inner Silicon Core Level
    const siliconGeo = new THREE.BoxGeometry(1.2, 0.1, 1.2);
    const siliconMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const siliconMesh = new THREE.Mesh(siliconGeo, siliconMat);
    siliconMesh.position.y = 0.24;
    cpuMesh.add(siliconMesh);

    const siliconEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(siliconGeo),
      new THREE.LineBasicMaterial({ color: 0xF4F4F0 })
    );
    siliconMesh.add(siliconEdges);

    // 3. Memory Array Modules (DRAM / Cache Banks)
    const memBankGeo = new THREE.BoxGeometry(0.3, 0.3, 1.4);
    const memMat = new THREE.MeshBasicMaterial({ color: 0x1D1D1D });
    const memEdgeMat = new THREE.LineBasicMaterial({ color: 0x444444 });

    const memOffsets = [-1.6, -1.2, 1.2, 1.6];
    memOffsets.forEach((x) => {
      const bank = new THREE.Mesh(memBankGeo, memMat);
      bank.position.set(x, -0.27, 0);
      const edge = new THREE.LineSegments(new THREE.EdgesGeometry(memBankGeo), memEdgeMat);
      bank.add(edge);
      clusterGroup.add(bank);
    });

    // 4. Coprocessor / Neural Engine Modules
    const coProcGeo = new THREE.BoxGeometry(1.2, 0.25, 0.6);
    const coProcMat = new THREE.MeshBasicMaterial({ color: 0x1B1B1B });
    const coProcEdgeMat = new THREE.LineBasicMaterial({ color: 0xFD5006 });

    const coProc1 = new THREE.Mesh(coProcGeo, coProcMat);
    coProc1.position.set(0, -0.3, 1.6);
    coProc1.add(new THREE.LineSegments(new THREE.EdgesGeometry(coProcGeo), coProcEdgeMat));
    clusterGroup.add(coProc1);

    const coProc2 = new THREE.Mesh(coProcGeo, coProcMat);
    coProc2.position.set(0, -0.3, -1.6);
    coProc2.add(new THREE.LineSegments(new THREE.EdgesGeometry(coProcGeo), new THREE.LineBasicMaterial({ color: 0x555555 })));
    clusterGroup.add(coProc2);

    // 5. Data Highway Bus Lines (Glowing Line Traces connecting CPU to Nodes)
    const busLinesGroup = new THREE.Group();
    clusterGroup.add(busLinesGroup);

    const lineMat = new THREE.LineBasicMaterial({ color: 0x333333 });
    const accentLineMat = new THREE.LineBasicMaterial({ color: 0xFD5006 });

    const createTrace = (p1: [number, number, number], p2: [number, number, number], isAccent = false) => {
      const points = [new THREE.Vector3(...p1), new THREE.Vector3(...p2)];
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, isAccent ? accentLineMat : lineMat);
      busLinesGroup.add(line);
    };

    // Orthogonal circuit traces
    createTrace([-0.9, -0.35, 0], [-1.2, -0.35, 0], true);
    createTrace([0.9, -0.35, 0], [1.2, -0.35, 0], true);
    createTrace([0, -0.35, 0.9], [0, -0.35, 1.3], true);
    createTrace([0, -0.35, -0.9], [0, -0.35, -1.3]);
    createTrace([-2.2, -0.4, -2.2], [2.2, -0.4, -2.2]);
    createTrace([-2.2, -0.4, 2.2], [2.2, -0.4, 2.2]);

    // 6. Traveling Data Packets (Pulsing Light Bits traveling along buses)
    const packetCount = 28;
    const packetGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xFD5006 });
    const packetAltMat = new THREE.MeshBasicMaterial({ color: 0xF4F4F0 });

    interface PacketNode {
      mesh: THREE.Mesh;
      speed: number;
      minZ: number;
      maxZ: number;
      axis: "x" | "z";
    }

    const packetNodes: PacketNode[] = [];

    for (let i = 0; i < packetCount; i++) {
      const isAlt = i % 3 === 0;
      const mesh = new THREE.Mesh(packetGeo, isAlt ? packetAltMat : packetMat);
      const isX = Math.random() > 0.5;
      const coord = (Math.random() - 0.5) * 4.2;

      if (isX) {
        mesh.position.set((Math.random() - 0.5) * 4, -0.35, coord);
      } else {
        mesh.position.set(coord, -0.35, (Math.random() - 0.5) * 4);
      }

      clusterGroup.add(mesh);
      packetNodes.push({
        mesh,
        speed: 0.015 + Math.random() * 0.02,
        minZ: -2.2,
        maxZ: 2.2,
        axis: isX ? "x" : "z"
      });
    }

    // Mouse Drag & Damping Controls
    let mouseX = 0;
    let targetRotationY = 0.4;
    let targetRotationX = 0.2;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        targetRotationY += dx * 0.007;
        targetRotationX += dy * 0.007;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener("mousedown", onMouseDown);
    currentMount.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animId: number;
    let lastTime = performance.now();
    let frames = 0;

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);

      // Slow continuous architectural turntable rotation
      if (!isDragging) {
        targetRotationY += 0.0025;
      }

      // Smooth interpolation damping
      clusterGroup.rotation.y += (targetRotationY - clusterGroup.rotation.y) * 0.06;
      clusterGroup.rotation.x += (targetRotationX - clusterGroup.rotation.x) * 0.06;

      // Animate data packets streaming along system buses
      packetNodes.forEach((node) => {
        if (node.axis === "x") {
          node.mesh.position.x += node.speed;
          if (node.mesh.position.x > node.maxZ) node.mesh.position.x = node.minZ;
        } else {
          node.mesh.position.z += node.speed;
          if (node.mesh.position.z > node.maxZ) node.mesh.position.z = node.minZ;
        }
      });

      // Subtle breath on central core
      siliconMesh.position.y = 0.24 + Math.sin(time * 0.003) * 0.02;

      // FPS tracking
      frames++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frames * 1000) / (time - lastTime)));
        frames = 0;
        lastTime = time;
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Resize listener
    const onResize = () => {
      if (!currentMount) return;
      const nw = currentMount.clientWidth;
      const nh = currentMount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      currentMount.removeEventListener("mousedown", onMouseDown);
      currentMount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      boardGeo.dispose();
      boardMat.dispose();
      cpuGeo.dispose();
      cpuMat.dispose();
      siliconGeo.dispose();
      siliconMat.dispose();
      memBankGeo.dispose();
      memMat.dispose();
      coProcGeo.dispose();
      coProcMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] bg-[#0C0C0C] border border-[#262626] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden select-none group">
      {/* Top Hardware Telemetry Header */}
      <div className="relative z-10 bg-[#141414] border-b border-[#242424] px-5 py-3 flex items-center justify-between text-xs font-mono text-[#8E8E88]">
        <div className="flex items-center gap-2.5">
          <Cpu size={14} className="text-[#FD5006]" />
          <span className="text-[#F4F4F0] font-semibold tracking-wider text-[11px]">
            FORGESYS ARCHITECTURE // HARDWARE MESH
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden sm:inline text-[#777772]">DISTRIBUTED CLUSTER 01</span>
          <span className="bg-[#202020] text-[#FD5006] border border-[#333333] px-2 py-0.5 font-semibold">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* Center 3D Isometric Hardware Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative flex-1"
        title="Click and drag to rotate the 3D architecture"
      />

      {/* Floating System HUD Overlays */}
      <div className="absolute top-16 left-5 z-10 pointer-events-none font-mono text-[10px] text-[#777772] space-y-1">
        <div>CORE: 8-WAY ASYNC MESH</div>
        <div>BUS WIDTH: 512-BIT PCIE 5.0</div>
        <div className="text-[#A3A39E]">MEMORY: DETERMINISTIC IN-RAM</div>
      </div>

      <div className="absolute top-16 right-5 z-10 pointer-events-none font-mono text-[10px] text-right text-[#777772] space-y-1">
        <div className="text-[#FD5006]">ONLINE // LATENCY: 0.4MS</div>
        <div>THROUGHPUT: 45K OPS/SEC</div>
      </div>

      {/* Bottom Bar: Drag Rotation Hint */}
      <div className="relative z-10 bg-[#141414]/95 border-t border-[#242424] px-5 py-2.5 flex items-center justify-between font-mono text-[10px] text-[#8E8E88]">
        <div className="flex items-center gap-2 text-[#F4F4F0]">
          <Rotate3d size={13} className="text-[#FD5006]" />
          <span>DRAG MOUSE TO ROTATE SYSTEM MATRIX</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#777772]">FOUNDERS: AYUSH &amp; SAAD</span>
          <span className="text-emerald-400 font-semibold">● ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
