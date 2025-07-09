import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
const Sketch = dynamic(() => import("react-p5").then(mod => mod.default), { ssr: false });

type Node = { x: number; y: number; vx: number; vy: number; };

export default function FlowFieldBackground() {
  const nodesRef = useRef<Node[]>([]);
  const p5Ref = useRef<any>(null);
  const numNodes = 65; // more nodes for higher frequency
  const nodeRadius = 100; // mouse influence

  // Initialize nodes
  const setup = (p5: any, canvasParentRef: any) => {
    p5Ref.current = p5;
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    canvas.style('display', 'block'); // Ensure canvas displays properly
    
    nodesRef.current = [];
    for (let i = 0; i < numNodes; i++) {
      nodesRef.current.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        vx: p5.random(-0.65, 0.65), // increased velocity
        vy: p5.random(-0.65, 0.65), // increased velocity
      });
    }
    p5.background(15, 18, 28, 255);
  };

  // Handle window resize
  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    // Redistribute nodes after resize
    for (const node of nodesRef.current) {
      node.x = p5.random(p5.width);
      node.y = p5.random(p5.height);
    }
  };

  // Helper: Find all triangles (Delaunay-like, not true Delaunay for speed)
  function getTriangles(nodes: Node[]) {
    const triangles: [Node, Node, Node][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        for (let k = j + 1; k < nodes.length; k++) {
          // Only connect close nodes for a mesh look
          const a = nodes[i], b = nodes[j], c = nodes[k];
          const maxDist = 140; // slightly lower for more, but thinner, triangles
          if (
            dist(a, b) < maxDist &&
            dist(b, c) < maxDist &&
            dist(c, a) < maxDist
          ) {
            triangles.push([a, b, c]);
          }
        }
      }
    }
    return triangles;
  }

  function dist(a: Node, b: Node) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  const draw = (p5: any) => {
    p5.clear();
    p5.background(15, 18, 28, 220);

    // Animate nodes
    for (const node of nodesRef.current) {
      // Subtle random drift (increased magnitude)
      node.x += node.vx + p5.noise(node.x * 0.002, node.y * 0.002, p5.frameCount * 0.01) * 0.6 - 0.3;
      node.y += node.vy + p5.noise(node.y * 0.002, node.x * 0.002, p5.frameCount * 0.01) * 0.6 - 0.3;

      // Mouse repulsion (gentler)
      const dx = node.x - p5.mouseX;
      const dy = node.y - p5.mouseY;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < nodeRadius) {
        const force = (nodeRadius - d) * 0.04;
        node.x += (dx / d) * force;
        node.y += (dy / d) * force;
      }

      // Bounce off edges and clamp to bounds
      if (node.x < 0) {
        node.x = 0;
        node.vx *= -1;
      }
      if (node.x > p5.width) {
        node.x = p5.width;
        node.vx *= -1;
      }
      if (node.y < 0) {
        node.y = 0;
        node.vy *= -1;
      }
      if (node.y > p5.height) {
        node.y = p5.height;
        node.vy *= -1;
      }
    }

    // Draw mesh triangles
    const triangles = getTriangles(nodesRef.current);
    for (const [a, b, c] of triangles) {
      p5.noFill();
      p5.stroke(120, 180, 255, 12 + Math.random() * 8); // alpha between 12-20
      p5.strokeWeight(0.7);
      p5.triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    }

    // Draw nodes
    for (const node of nodesRef.current) {
      p5.noStroke();
      p5.fill(180, 220, 255, 48); // lower alpha for subtlety
      p5.ellipse(node.x, node.y, 4, 4); // smaller nodes
    }
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}

