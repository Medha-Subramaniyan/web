import dynamic from "next/dynamic";
import { useRef } from "react";
const Sketch = dynamic(() => import("react-p5").then(mod => mod.default), { ssr: false });

export default function FlowFieldBackground() {
  const pointsRef = useRef<{ x: number; y: number; phase: number }[]>([]);
  const offsetsRef = useRef<{ x: number; y: number }[]>([]);
  const homeRef = useRef<{ x: number; y: number }[]>([]);
  const cols = 40;
  const rows = 20;
  const spacing = 40;
  const repelRadius = 90; // How far the mouse repels points
  const repelStrength = 0.12; // How strongly the mouse repels points
  const returnSpeed = 0.08; // How quickly points return to home

  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    pointsRef.current = [];
    offsetsRef.current = [];
    homeRef.current = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = x * spacing + spacing / 2;
        const py = y * spacing + spacing / 2;
        // Each point gets a unique phase for its wave
        pointsRef.current.push({ x: px, y: py, phase: Math.random() * Math.PI * 2 });
        offsetsRef.current.push({ x: 0, y: 0 });
        homeRef.current.push({ x: px, y: py });
      }
    }
    p5.background(0);
  };

  const draw = (p5: any) => {
    p5.clear();
    p5.background(0, 0, 0, 220);

    const mx = p5.mouseX;
    const my = p5.mouseY;

    for (let i = 0; i < pointsRef.current.length; i++) {
      const home = homeRef.current[i];
      const base = pointsRef.current[i];
      let offset = offsetsRef.current[i];

      // Calculate distance from mouse to point
      const dx = home.x + offset.x - mx;
      const dy = home.y + offset.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Repel if mouse is close
      if (dist < repelRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (repelRadius - dist) * repelStrength;
        offset.x += Math.cos(angle) * force;
        offset.y += Math.sin(angle) * force;
      }

      // Ease back to home position
      offset.x += (0 - offset.x) * returnSpeed;
      offset.y += (0 - offset.y) * returnSpeed;

      // Calculate a wavy control point for the curve
      const t = p5.frameCount * 0.04 + base.phase;
      const waveMag = 12 + 8 * Math.sin(t); // amplitude of the wave
      const ctrlX = home.x + offset.x * 0.5 + Math.sin(t) * waveMag;
      const ctrlY = home.y + offset.y * 0.5 - Math.abs(Math.cos(t)) * waveMag;

      // Tip of the blade
      const tipX = home.x + offset.x;
      const tipY = home.y + offset.y;

      // Draw a quadratic curve (like a blade of grass)
      p5.stroke(200, 200, 255, 60);
      p5.strokeWeight(2);
      p5.noFill();
      p5.beginShape();
      p5.vertex(home.x, home.y);
      p5.quadraticVertex(ctrlX, ctrlY, tipX, tipY);
      p5.endShape();
    }
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}