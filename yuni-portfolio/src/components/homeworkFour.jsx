// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(250, 248, 245);
  
//   // 동심원 함수
//   function concentricCircle(x, y, r, rings) {
//     noFill();
//     strokeWeight(2);
//     for (let i = 0; i < rings; i++) {
//       // 색상 변화 애니메이션
//       let hue = (frameCount * 2 + i * 20) % 360;
//       colorMode(HSB);
//       if (i % 2 === 0) {
//         stroke(hue, 80, 100);
//       } else {
//         stroke(hue + 20, 80, 90);
//       }
//       colorMode(RGB);
      
//       let currentR = map(i, 0, rings - 1, r, r * 0.2);
//       ellipse(x, y, currentR * 2);
//     }
//   }
  
//   // 큰 배경 반원들
//   fill(20, 20, 25);
//   noStroke();
  
//   // 반원 움직임 애니메이션
//   let arc1Y = height * 0.3 + sin(frameCount * 0.02) * 10;
//   arc(0, arc1Y, 400, 400, 0, PI);
  
//   let arc2Y = height * 0.7 + cos(frameCount * 0.025) * 10;
//   arc(width, arc2Y, 500, 500, PI, TWO_PI);
  
//   // 주황색 강조 원들 (크기와 색상 애니메이션)
//   // 첫 번째 주황색 원
//   let circle1Size = 120 + sin(frameCount * 0.05) * 20;
//   let circle1Hue = (frameCount * 1.5) % 60 + 10; // 주황색 범위에서 변화
//   colorMode(HSB);
//   fill(circle1Hue, 80, 100);
//   colorMode(RGB);
//   ellipse(width * 0.8, height * 0.15, circle1Size);
  
//   // 두 번째 주황색 원
//   let circle2Size = 100 + cos(frameCount * 0.04) * 15;
//   let circle2Hue = (frameCount * 1.2) % 60 + 15;
//   colorMode(HSB);
//   fill(circle2Hue, 85, 95);
//   colorMode(RGB);
//   ellipse(width * 0.2, height * 0.85, circle2Size);
  
//   // 줄무늬들 (x축 움직임 추가)
//   push();
//   let stripedOffsetX = sin(frameCount * 0.03) * 20;
//   translate(width * 0.6 + stripedOffsetX, height * 0.4);
//   stroke(0);
//   strokeWeight(2);
//   for (let i = -60; i < 60; i += 8) {
//     line(-80, i, 80, i);
//   }
//   pop();
  
//   // 사각형
//   stroke(255);
//   strokeWeight(3);
//   fill(0);
  
//   // 사각형 움직임 애니메이션
//   let quadOffsetX = cos(frameCount * 0.03) * 15;
//   let quadOffsetY = sin(frameCount * 0.025) * 10;
//   quad(
//     width * 0.1 + 50 + quadOffsetX, height * 0.5 + 40 + quadOffsetY, 
//     width * 0.3 + 50 + quadOffsetX, height * 0.45 + 40 + quadOffsetY, 
//     width * 0.35 + 50 + quadOffsetX, height * 0.65 + 40 + quadOffsetY, 
//     width * 0.15 + 50 + quadOffsetX, height * 0.7 + 40 + quadOffsetY
//   );
  
//   // 삼각형
//   fill(20, 20, 25);
  
//   // 삼각형 움직임 애니메이션
//   let triOffsetX = sin(frameCount * 0.035) * 12;
//   let triOffsetY = cos(frameCount * 0.04) * 8;
//   triangle(
//     width * 0.7 + triOffsetX, height * 0.6 + triOffsetY, 
//     width * 0.85 + triOffsetX, height * 0.5 + triOffsetY, 
//     width * 0.9 + triOffsetX, height * 0.75 + triOffsetY
//   );
//   noStroke();
  
//   // 점 패턴들 
//   fill(0);
//   let dottedOffset1 = cos(frameCount * 0.025) * 10;
//   for (let x = width * 0.45; x < width * 0.55; x += 15) {
//     for (let y = height * 0.25; y < height * 0.35; y += 15) {
//       ellipse(x + dottedOffset1, y, 4);
//     }
//   }
//   fill(0);
//   let dottedOffset2 = sin(frameCount * 0.03) * 12;
//   for (let x = width * 0.45 + 45; x < width * 0.55 + 45; x += 15) {
//     for (let y = height * 0.25; y < height * 0.35; y += 15) {
//       ellipse(x + dottedOffset2, y, 4);
//     }
//   }
  
//   // 별 
//   push();
//   translate(width * 0.15, height * 0.25 - 30);
  
//   // 별 회전 애니메이션
//   rotate(frameCount * 0.02);
  
//   // 별 크기 변화
//   let starScale = 1 + sin(frameCount * 0.06) * 0.3;
//   scale(starScale);
  
//   fill(0);
//   beginShape();
//   vertex(0, -30);
//   vertex(10, -10);
//   vertex(30, 0);
//   vertex(10, 10);
//   vertex(0, 30);
//   vertex(-10, 10);
//   vertex(-30, 0);
//   vertex(-10, -10);
//   endShape(CLOSE);
//   pop();
  
//   // 둥근 사각형과 궤도를 도는 원
//   fill(0);
//   noStroke();
//   let rectCenterX = width * 0.65 + 60; // 사각형 중심 x
//   let rectCenterY = height * 0.75 + 40; // 사각형 중심 y
//   rect(width * 0.65, height * 0.75, 120, 80, 40);
  
//   // 사각형 주변을 도는 원
//   fill(250, 248, 245);
//   let orbitRadius = 50;
//   let orbitAngle = frameCount * 0.04;
//   let ellipseX = rectCenterX + cos(orbitAngle) * orbitRadius;
//   let ellipseY = rectCenterY + sin(orbitAngle) * orbitRadius;
//   ellipse(ellipseX, ellipseY, 60);
  
//   // 동심원
//   concentricCircle(width * 0.45, height * 0.75, 40, 8);
// }

// // Save a 5-second gif when the user presses the 's' key.
// function keyPressed() {
//   if (key === 's') {
//     saveGif('mySketch', 10);
//     console.log('gif');
//   }
// }

// import Carousel from './Carousel'
import Sketch from 'react-p5'

// 애니메이션 버전
const GeometricSketchAnimated = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(250, 248, 245)
    
    const concentricCircle = (x, y, r, rings) => {
      p5.noFill()
      p5.strokeWeight(2)
      for (let i = 0; i < rings; i++) {
        let hue = (p5.frameCount * 2 + i * 20) % 360
        p5.colorMode(p5.HSB)
        if (i % 2 === 0) {
          p5.stroke(hue, 80, 100)
        } else {
          p5.stroke(hue + 20, 80, 90)
        }
        p5.colorMode(p5.RGB)
        
        let currentR = p5.map(i, 0, rings - 1, r, r * 0.2)
        p5.ellipse(x, y, currentR * 2)
      }
    }
    
    p5.fill(20, 20, 25)
    p5.noStroke()
    
    let arc1Y = p5.height * 0.3 + p5.sin(p5.frameCount * 0.02) * 10
    p5.arc(0, arc1Y, 400, 400, 0, p5.PI)
    
    let arc2Y = p5.height * 0.7 + p5.cos(p5.frameCount * 0.025) * 10
    p5.arc(p5.width, arc2Y, 500, 500, p5.PI, p5.TWO_PI)
    
    let circle1Size = 120 + p5.sin(p5.frameCount * 0.05) * 20
    let circle1Hue = (p5.frameCount * 1.5) % 60 + 10
    p5.colorMode(p5.HSB)
    p5.fill(circle1Hue, 80, 100)
    p5.colorMode(p5.RGB)
    p5.ellipse(p5.width * 0.8, p5.height * 0.15, circle1Size)
    
    let circle2Size = 100 + p5.cos(p5.frameCount * 0.04) * 15
    let circle2Hue = (p5.frameCount * 1.2) % 60 + 15
    p5.colorMode(p5.HSB)
    p5.fill(circle2Hue, 85, 95)
    p5.colorMode(p5.RGB)
    p5.ellipse(p5.width * 0.2, p5.height * 0.85, circle2Size)
    
    p5.push()
    let stripedOffsetX = p5.sin(p5.frameCount * 0.03) * 20
    p5.translate(p5.width * 0.6 + stripedOffsetX, p5.height * 0.4)
    p5.stroke(0)
    p5.strokeWeight(2)
    for (let i = -60; i < 60; i += 8) {
      p5.line(-80, i, 80, i)
    }
    p5.pop()
    
    p5.stroke(255)
    p5.strokeWeight(3)
    p5.fill(0)
    
    let quadOffsetX = p5.cos(p5.frameCount * 0.03) * 15
    let quadOffsetY = p5.sin(p5.frameCount * 0.025) * 10
    p5.quad(
      p5.width * 0.1 + 50 + quadOffsetX, p5.height * 0.5 + 40 + quadOffsetY, 
      p5.width * 0.3 + 50 + quadOffsetX, p5.height * 0.45 + 40 + quadOffsetY, 
      p5.width * 0.35 + 50 + quadOffsetX, p5.height * 0.65 + 40 + quadOffsetY, 
      p5.width * 0.15 + 50 + quadOffsetX, p5.height * 0.7 + 40 + quadOffsetY
    )
    
    p5.fill(20, 20, 25)
    let triOffsetX = p5.sin(p5.frameCount * 0.035) * 12
    let triOffsetY = p5.cos(p5.frameCount * 0.04) * 8
    p5.triangle(
      p5.width * 0.7 + triOffsetX, p5.height * 0.6 + triOffsetY, 
      p5.width * 0.85 + triOffsetX, p5.height * 0.5 + triOffsetY, 
      p5.width * 0.9 + triOffsetX, p5.height * 0.75 + triOffsetY
    )
    p5.noStroke()
    
    p5.fill(0)
    let dottedOffset1 = p5.cos(p5.frameCount * 0.025) * 10
    for (let x = p5.width * 0.45; x < p5.width * 0.55; x += 15) {
      for (let y = p5.height * 0.25; y < p5.height * 0.35; y += 15) {
        p5.ellipse(x + dottedOffset1, y, 4)
      }
    }
    let dottedOffset2 = p5.sin(p5.frameCount * 0.03) * 12
    for (let x = p5.width * 0.45 + 45; x < p5.width * 0.55 + 45; x += 15) {
      for (let y = p5.height * 0.25; y < p5.height * 0.35; y += 15) {
        p5.ellipse(x + dottedOffset2, y, 4)
      }
    }
    
    p5.push()
    p5.translate(p5.width * 0.15, p5.height * 0.25 - 30)
    p5.rotate(p5.frameCount * 0.02)
    let starScale = 1 + p5.sin(p5.frameCount * 0.06) * 0.3
    p5.scale(starScale)
    p5.fill(0)
    p5.beginShape()
    p5.vertex(0, -30)
    p5.vertex(10, -10)
    p5.vertex(30, 0)
    p5.vertex(10, 10)
    p5.vertex(0, 30)
    p5.vertex(-10, 10)
    p5.vertex(-30, 0)
    p5.vertex(-10, -10)
    p5.endShape(p5.CLOSE)
    p5.pop()
    
    p5.fill(0)
    p5.noStroke()
    let rectCenterX = p5.width * 0.65 + 60
    let rectCenterY = p5.height * 0.75 + 40
    p5.rect(p5.width * 0.65, p5.height * 0.75, 120, 80, 40)
    
    p5.fill(250, 248, 245)
    let orbitRadius = 50
    let orbitAngle = p5.frameCount * 0.04
    let ellipseX = rectCenterX + p5.cos(orbitAngle) * orbitRadius
    let ellipseY = rectCenterY + p5.sin(orbitAngle) * orbitRadius
    p5.ellipse(ellipseX, ellipseY, 60)
    
    concentricCircle(p5.width * 0.45, p5.height * 0.75, 40, 5)
  }

  return <Sketch setup={setup} draw={draw} />
}

export default GeometricSketchAnimated;