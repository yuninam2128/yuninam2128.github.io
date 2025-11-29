// let redActive = false;
// let greenActive = false;
// let blueActive = false;
//
// function setup() {
//   createCanvas(600, 400);
// }
//
// function draw() {
//   background(255);
//   noStroke();
//
//   // 활성화된 색상 오버레이 적용
//   if (redActive) {
//     fill(255, 0, 0, 127);
//     rect(width/2, height/2, width, height);
//   }
//   if (greenActive) {
//     fill(0, 255, 0, 127);
//     rect(width/2, height/2, width, height);
//   }
//   if (blueActive) {
//     fill(0, 0, 255, 127);
//     rect(width/2, height/2, width, height);
//   }
//
//   // 뒷머리
//   fill(126, 63, 11);
//   rect(width/2, height/2-60, 280, 230, 170);
//
//   // 얼굴
//   fill(255, 180, 160);
//   rectMode(CENTER);
//   rect(width/2, height/2-20, 240, 230, 100);
//
//   // 귀
//   ellipse(width/2 - 140, height/2-20, 80, 120);
//   ellipse(width/2 + 140, height/2-20, 80, 120);
//
//   // 얼굴 덮기
//   rect(width/2, height/2-20, 220, 220, 100);
//
//   // --------- 왼쪽 머리카락 ---------
//   fill(126, 63, 11);
//   beginShape();
//   curveVertex(150, 270);
//   curveVertex(150, 270);
//   curveVertex(140, 230);
//   curveVertex(140, 180);
//   curveVertex(190, 130);
//   curveVertex(180, 190);
//   curveVertex(160, 260);
//   endShape(CLOSE);
//
//   fill(103, 49, 0);
//   beginShape();
//   curveVertex(150, 380);
//   curveVertex(150, 380);
//   curveVertex(100, 310);
//   curveVertex(160, 220);
//   curveVertex(160, 120);
//   curveVertex(220, 80);
//   curveVertex(250, 40);
//   curveVertex(300, 60);
//   curveVertex(230, 100);
//   curveVertex(220, 200);
//   curveVertex(140, 320);
//   endShape(CLOSE);
//
//   fill(126, 63, 11);
//   beginShape();
//   curveVertex(170, 400);
//   curveVertex(170, 400);
//   curveVertex(130, 330);
//   curveVertex(180, 250);
//   curveVertex(180, 150);
//   curveVertex(225, 100);
//   curveVertex(250, 50);
//   curveVertex(300, 70);
//   curveVertex(230, 145);
//   curveVertex(220, 260);
//   curveVertex(170, 320);
//   endShape(CLOSE);
//
//   // --------- 오른쪽 머리카락 좌우반전 ---------
//   push();
//   translate(width, 0);
//   scale(-1, 1);
//
//   fill(126, 63, 11);
//   beginShape();
//   curveVertex(150, 270);
//   curveVertex(150, 270);
//   curveVertex(140, 230);
//   curveVertex(140, 180);
//   curveVertex(190, 130);
//   curveVertex(180, 190);
//   curveVertex(160, 260);
//   endShape(CLOSE);
//
//   fill(103, 49, 0);
//   beginShape();
//   curveVertex(150, 380);
//   curveVertex(150, 380);
//   curveVertex(100, 310);
//   curveVertex(160, 220);
//   curveVertex(160, 120);
//   curveVertex(220, 80);
//   curveVertex(250, 40);
//   curveVertex(300, 60);
//   curveVertex(230, 100);
//   curveVertex(220, 200);
//   curveVertex(140, 320);
//   endShape(CLOSE);
//
//   fill(126, 63, 11);
//   beginShape();
//   curveVertex(170, 400);
//   curveVertex(170, 400);
//   curveVertex(130, 330);
//   curveVertex(180, 250);
//   curveVertex(180, 150);
//   curveVertex(225, 100);
//   curveVertex(250, 50);
//   curveVertex(300, 70);
//   curveVertex(230, 145);
//   curveVertex(220, 260);
//   curveVertex(170, 320);
//   endShape(CLOSE);
//
//   pop();
//
//   // 눈: 항상 뜬 상태
//   fill(255);
//   ellipse(width/2 - 30, height/2-20, 60, 80);
//   ellipse(width/2 + 30, height/2-20, 60, 80);
//
//   fill(0);
//   ellipse(width/2 - 25, height/2-20, 40, 60);
//   ellipse(width/2 + 25, height/2-20, 40, 60);
//
//   // 눈썹
//   fill(0);
//   rect(width/2 - 40, height/2 - 85, 40, 5, 5);
//   rect(width/2 + 40, height/2 - 85, 40, 5, 5);
//
//   // 치아
//   fill(255);
//   rect(width/2, height/2 +35, 20, 15, 5);
//
//   // 입
//   fill(0);
//   rect(width/2, height/2 +30, 40, 5, 5);
//
//   // 볼터치
//   fill(242,117,129, 90);
//   ellipse(width/2-50, height/2+30, 50, 40);
//   ellipse(width/2+50, height/2+30, 50, 40);
// }
//
// function keyPressed() {
//   if (key === 'r' || key === 'R') redActive = !redActive;
//   if (key === 'g' || key === 'G') greenActive = !greenActive;
//   if (key === 'b' || key === 'B') blueActive = !blueActive;
// }

import Sketch from 'react-p5'

const HomeworkTwo = () => {
  let redActive = false
  let greenActive = false
  let blueActive = false

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(255)
    p5.noStroke()

    if (redActive) {
      p5.fill(255, 0, 0, 127)
      p5.rect(p5.width/2, p5.height/2, p5.width, p5.height)
    }
    if (greenActive) {
      p5.fill(0, 255, 0, 127)
      p5.rect(p5.width/2, p5.height/2, p5.width, p5.height)
    }
    if (blueActive) {
      p5.fill(0, 0, 255, 127)
      p5.rect(p5.width/2, p5.height/2, p5.width, p5.height)
    }

    p5.fill(126, 63, 11)
    p5.rect(p5.width/2, p5.height/2-60, 280, 230, 170)

    p5.fill(255, 180, 160)
    p5.rectMode(p5.CENTER)
    p5.rect(p5.width/2, p5.height/2-20, 240, 230, 100)

    p5.ellipse(p5.width/2 - 140, p5.height/2-20, 80, 120)
    p5.ellipse(p5.width/2 + 140, p5.height/2-20, 80, 120)

    p5.rect(p5.width/2, p5.height/2-20, 220, 220, 100)

    p5.fill(126, 63, 11)
    p5.beginShape()
    p5.curveVertex(150, 270)
    p5.curveVertex(150, 270)
    p5.curveVertex(140, 230)
    p5.curveVertex(140, 180)
    p5.curveVertex(190, 130)
    p5.curveVertex(180, 190)
    p5.curveVertex(160, 260)
    p5.endShape(p5.CLOSE)

    p5.fill(103, 49, 0)
    p5.beginShape()
    p5.curveVertex(150, 380)
    p5.curveVertex(150, 380)
    p5.curveVertex(100, 310)
    p5.curveVertex(160, 220)
    p5.curveVertex(160, 120)
    p5.curveVertex(220, 80)
    p5.curveVertex(250, 40)
    p5.curveVertex(300, 60)
    p5.curveVertex(230, 100)
    p5.curveVertex(220, 200)
    p5.curveVertex(140, 320)
    p5.endShape(p5.CLOSE)

    p5.fill(126, 63, 11)
    p5.beginShape()
    p5.curveVertex(170, 400)
    p5.curveVertex(170, 400)
    p5.curveVertex(130, 330)
    p5.curveVertex(180, 250)
    p5.curveVertex(180, 150)
    p5.curveVertex(225, 100)
    p5.curveVertex(250, 50)
    p5.curveVertex(300, 70)
    p5.curveVertex(230, 145)
    p5.curveVertex(220, 260)
    p5.curveVertex(170, 320)
    p5.endShape(p5.CLOSE)

    p5.push()
    p5.translate(p5.width, 0)
    p5.scale(-1, 1)

    p5.fill(126, 63, 11)
    p5.beginShape()
    p5.curveVertex(150, 270)
    p5.curveVertex(150, 270)
    p5.curveVertex(140, 230)
    p5.curveVertex(140, 180)
    p5.curveVertex(190, 130)
    p5.curveVertex(180, 190)
    p5.curveVertex(160, 260)
    p5.endShape(p5.CLOSE)

    p5.fill(103, 49, 0)
    p5.beginShape()
    p5.curveVertex(150, 380)
    p5.curveVertex(150, 380)
    p5.curveVertex(100, 310)
    p5.curveVertex(160, 220)
    p5.curveVertex(160, 120)
    p5.curveVertex(220, 80)
    p5.curveVertex(250, 40)
    p5.curveVertex(300, 60)
    p5.curveVertex(230, 100)
    p5.curveVertex(220, 200)
    p5.curveVertex(140, 320)
    p5.endShape(p5.CLOSE)

    p5.fill(126, 63, 11)
    p5.beginShape()
    p5.curveVertex(170, 400)
    p5.curveVertex(170, 400)
    p5.curveVertex(130, 330)
    p5.curveVertex(180, 250)
    p5.curveVertex(180, 150)
    p5.curveVertex(225, 100)
    p5.curveVertex(250, 50)
    p5.curveVertex(300, 70)
    p5.curveVertex(230, 145)
    p5.curveVertex(220, 260)
    p5.curveVertex(170, 320)
    p5.endShape(p5.CLOSE)

    p5.pop()

    p5.fill(255)
    p5.ellipse(p5.width/2 - 30, p5.height/2-20, 60, 80)
    p5.ellipse(p5.width/2 + 30, p5.height/2-20, 60, 80)

    p5.fill(0)
    p5.ellipse(p5.width/2 - 25, p5.height/2-20, 40, 60)
    p5.ellipse(p5.width/2 + 25, p5.height/2-20, 40, 60)

    p5.fill(0)
    p5.rect(p5.width/2 - 40, p5.height/2 - 85, 40, 5, 5)
    p5.rect(p5.width/2 + 40, p5.height/2 - 85, 40, 5, 5)

    p5.fill(255)
    p5.rect(p5.width/2, p5.height/2 +35, 20, 15, 5)

    p5.fill(0)
    p5.rect(p5.width/2, p5.height/2 +30, 40, 5, 5)

    p5.fill(242, 117, 129, 90)
    p5.ellipse(p5.width/2-50, p5.height/2+30, 50, 40)
    p5.ellipse(p5.width/2+50, p5.height/2+30, 50, 40)
  }

  const keyPressed = (p5) => {
    if (p5.key === 'r' || p5.key === 'R') redActive = !redActive
    if (p5.key === 'g' || p5.key === 'G') greenActive = !greenActive
    if (p5.key === 'b' || p5.key === 'B') blueActive = !blueActive
  }

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />
}

export default HomeworkTwo
