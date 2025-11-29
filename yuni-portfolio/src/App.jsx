import Carousel from './components/Carousel'
import GeometricSketchStatic from './components/homeworkOne'
import GeometricSketchAnimated from './components/homeworkFour'
import HomeworkThree from './components/homeworkThree'
import HomeworkTwo from './components/homeworkTwo'
import TextType from './components/TextType'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginTop: '50vh', transform: 'translateY(-70%)' }}>
        <div>
          <TextType
            text={["SSU Global Media", "NamJiyun's", "P5-js Visual Portfolio"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div style={{ height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Carousel
            baseWidth={600}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          >
            <GeometricSketchStatic />
            <GeometricSketchAnimated />
            <HomeworkTwo />
            <HomeworkThree />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default App