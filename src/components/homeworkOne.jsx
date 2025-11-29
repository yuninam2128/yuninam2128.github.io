import Sketch from 'react-p5';

// function setup() {
//   createCanvas(600, 400);
//   noLoop();
// }
// function draw() {
//   background(250, 248, 245);

//   // 원 속에 원이 있는 형태
//   function concentricCircle(x, y, r, rings) {
//     noFill();
//     strokeWeight(2);
//     for (let i = 0; i < rings; i++) {
//       if (i % 2 === 0) {
//         stroke(255, 120, 60);
//       } else {
//         stroke(255, 80, 40);
//       }
//       let currentR = map(i, 0, rings - 1, r, r * 0.2);
//       ellipse(x, y, currentR * 2);
//     }
//   }

//   // Large background semi-circles
//   fill(20, 20, 25);
//   noStroke();
//   arc(0, height * 0.3, 400, 400, 0, PI);
//   arc(width, height * 0.7, 500, 500, PI, TWO_PI);

//   // Orange accent circles
//   fill(255, 120, 60);
//   ellipse(width * 0.8, height * 0.15, 120);
//   ellipse(width * 0.2, height * 0.85, 100);

//   // Striped sections using line patterns
//   push();
//   translate(width * 0.6, height * 0.4);
//   stroke(0);
//   strokeWeight(2);
//   for (let i = -60; i < 60; i += 8) {
//     line(-80, i, 80, i);
//   }
//   pop();

//   // Geometric shapes overlay
//   stroke(255);
//   strokeWeight(3);
//   fill(0);
//   quad(width * 0.1+50, height * 0.5+40, width * 0.3+50, height * 0.45+40, width * 0.35+50, height * 0.65+40, width * 0.15+50, height * 0.7+40);

//   // Triangle compositions
//   fill(20, 20, 25);
//   triangle(width * 0.7, height * 0.6, width * 0.85, height * 0.5, width * 0.9, height * 0.75);
//   noStroke();

//   // Dotted pattern areas
//   fill(0);
//   for (let x = width * 0.45; x < width * 0.55; x += 15) {
//     for (let y = height * 0.25; y < height * 0.35; y += 15) {
//       ellipse(x, y, 4);
//     }
//   }
//   fill(0);
//   for (let x = width * 0.45+45; x < width * 0.55+45; x += 15) {
//     for (let y = height * 0.25; y < height * 0.35; y += 15) {
//       ellipse(x, y, 4);
//     }
//   }

//   // Abstract star-like accent
//   push();
//   translate(width * 0.15, height * 0.25-30);
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

//   // Rounded rectangles as compositional elements
//   fill(0);
//   noStroke();
//   rect(width * 0.65, height * 0.75, 120, 80, 40);
//   fill(250, 248, 245);
//   ellipse(width * 0.71, height * 0.79, 60);

//   // Final accent with concentric circles
//   concentricCircle(width * 0.45, height * 0.75, 40, 5);
// }

const GeometricSketchStatic = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef)
    p5.noLoop()
  }

  const draw = (p5) => {
    p5.background(250, 248, 245)

    const concentricCircle = (x, y, r, rings) => {
      p5.noFill()
      p5.strokeWeight(2)
      for (let i = 0; i < rings; i++) {
        if (i % 2 === 0) {
          p5.stroke(255, 120, 60)
        } else {
          p5.stroke(255, 80, 40)
        }
        let currentR = p5.map(i, 0, rings - 1, r, r * 0.2)
        p5.ellipse(x, y, currentR * 2)
      }
    }

    p5.fill(20, 20, 25)
    p5.noStroke()
    p5.arc(0, p5.height * 0.3, 400, 400, 0, p5.PI)
    p5.arc(p5.width, p5.height * 0.7, 500, 500, p5.PI, p5.TWO_PI)

    p5.fill(255, 120, 60)
    p5.ellipse(p5.width * 0.8, p5.height * 0.15, 120)
    p5.ellipse(p5.width * 0.2, p5.height * 0.85, 100)

    p5.push()
    p5.translate(p5.width * 0.6, p5.height * 0.4)
    p5.stroke(0)
    p5.strokeWeight(2)
    for (let i = -60; i < 60; i += 8) {
      p5.line(-80, i, 80, i)
    }
    p5.pop()

    p5.stroke(255)
    p5.strokeWeight(3)
    p5.fill(0)
    p5.quad(
      p5.width * 0.1 + 50, p5.height * 0.5 + 40, 
      p5.width * 0.3 + 50, p5.height * 0.45 + 40, 
      p5.width * 0.35 + 50, p5.height * 0.65 + 40, 
      p5.width * 0.15 + 50, p5.height * 0.7 + 40
    )

    p5.fill(20, 20, 25)
    p5.triangle(
      p5.width * 0.7, p5.height * 0.6, 
      p5.width * 0.85, p5.height * 0.5, 
      p5.width * 0.9, p5.height * 0.75
    )
    p5.noStroke()

    p5.fill(0)
    for (let x = p5.width * 0.45; x < p5.width * 0.55; x += 15) {
      for (let y = p5.height * 0.25; y < p5.height * 0.35; y += 15) {
        p5.ellipse(x, y, 4)
      }
    }
    for (let x = p5.width * 0.45 + 45; x < p5.width * 0.55 + 45; x += 15) {
      for (let y = p5.height * 0.25; y < p5.height * 0.35; y += 15) {
        p5.ellipse(x, y, 4)
      }
    }

    p5.push()
    p5.translate(p5.width * 0.15, p5.height * 0.25 - 30)
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
    p5.rect(p5.width * 0.65, p5.height * 0.75, 120, 80, 40)
    p5.fill(250, 248, 245)
    p5.ellipse(p5.width * 0.71, p5.height * 0.79, 60)

    concentricCircle(p5.width * 0.45, p5.height * 0.75, 40, 5)
  }

  return <Sketch setup={setup} draw={draw} />
}

export default GeometricSketchStatic;