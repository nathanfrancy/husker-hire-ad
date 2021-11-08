import { useState } from 'react';

import './App.css';

function App() {
  const [width, setWidth] = useState(600)
  const [height, setHeight] = useState(350)
  const [bgColor, setBgColor] = useState("03A9F4")
  const [fontColor, setFontColor] = useState("FAFAFA")
  const [introText, setIntroText] = useState("The Lafayette County C-1 School District is looking for:")
  const [introTextSize, setIntroTextSize] = useState(30)
  const [position, setPosition] = useState("Certified LPN or RN Substitute Nurses")
  const [textContainerWidth, setTextContainerWidth] = useState(375)

  const [backgroundPosition, setBackgroundPosition] = useState('bottom right')
  const [backgroundSize, setBackgroundSize] = useState(300)
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('https://cdn-icons-png.flaticon.com/512/3105/3105867.png')
  const [backgroundImageUrlSearch, setBackgroundImageUrlSearch] = useState('')

  var wrapperStyle = {
    position: 'relative',
    backgroundColor: `#${bgColor}`,
    width: `${width}px`,
    height: `${height}px`,
    padding: '24px',
    color: fontColor,
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${backgroundSize}px`,
    backgroundPosition: backgroundPosition,
  }

  var textContainerStyle = {
    width: `${textContainerWidth}px`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',
  }

  const line1Style = {
    fontSize: `${introTextSize}px`,
    height: '30%',
    paddingTop: '10%',
    color: `#${fontColor}`,
  }

  const line2Style = {
    height: '20%',
    fontSize: '28px',
    fontWeight: 700,
    color: `#${fontColor}`,
  }

  const line3Style = {
    fontSize: '18px',
    height: '25%',
    paddingTop: '10%',
    color: `#${fontColor}`,
  }

  const onChangeWidth = (e) => setWidth(e.target.value);
  const onChangeHeight = (e) => setHeight(e.target.value);
  const onChangeBgColor = (e) => setBgColor(e.target.value);
  const onChangeFontColor = (e) => setFontColor(e.target.value);
  const onChangeIntro = (e) => setIntroText(e.target.value);
  const onChangeIntroTextSize = (e) => setIntroTextSize(e.target.value);
  const onChangePosition = (e) => setPosition(e.target.value);
  const onChangeTextContainerWidth = (e) => setTextContainerWidth(e.target.value);

  // Background image
  const onChangeBgPosition = (e) => setBackgroundPosition(e.target.value);
  const onChangeBgSize = (e) => setBackgroundSize(e.target.value);
  const onChangeBackgroundImageUrl = (e) => setBackgroundImageUrl(e.target.value);
  const onChangeBackgroundImageUrlSearch = (e) => setBackgroundImageUrlSearch(e.target.value);

  const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(backgroundImageUrlSearch)}%20icons&tbm=isch&hl=en&tbs=ic:trans&sa=X&ved=0CAMQpwVqFwoTCIiY4Y6CiPQCFQAAAAAdAAAAABAO&biw=1631&bih=808`;
  
  return (
    <div className="App">
      <h1>Husker Position Banner Ad Generator</h1>
      <p>Use the settings below to generate your social media ad.<br />
      When you're done, use the Snipping Tool (or for Mac use cmd+shift+4) to take a screenshot of the ad. This tool <strong>does not</strong> spell-check, so please do that before putting values in.</p>
      <div style={wrapperStyle}>
        <div style={textContainerStyle}>
          <div style={line1Style}>{introText}</div>
          <div style={line2Style}>{position}!</div>
          <div style={line3Style}>Applications are available at Central Office or online at <u>www.huskersk12.org</u>. Call Central Office at <u>660.584.3631</u> with any questions.</div>
        </div>
      </div>
      <br /><br />
      <div className="inputGroup">
        <label>Intro Text: </label>
        <input style={{ width: '350px' }} type="text" onChange={onChangeIntro} value={introText} />(top of the ad text)
      </div>
      <div className="inputGroup">
        <label>Intro Text Size: </label>
        <input type="text" onChange={onChangeIntroTextSize} value={introTextSize} />px
      </div>
      <div className="inputGroup">
        <label>Position: </label>
        <input style={{ width: '350px' }} type="text" onChange={onChangePosition} value={position} />(name of the position)
      </div>
      <div className="inputGroup">
        <label>Width: </label>
        <input type="text" onChange={onChangeWidth} value={width} />px
      </div>
      <div className="inputGroup">
        <label>Height: </label>
        <input type="text" onChange={onChangeHeight} value={height} />px
      </div>
      <div className="inputGroup">
        <label>Bg Color: </label>
        <input type="text" onChange={onChangeBgColor} value={bgColor} /> (hex color) <a href="https://materialui.co/colors/" target="_blank" rel="noreferrer">Nice color palette</a>
      </div>
      <div className="inputGroup">
        <label>Font Color: </label>
        <input type="text" onChange={onChangeFontColor} value={fontColor} /> (hex color) <a href="https://materialui.co/colors/" target="_blank" rel="noreferrer">Nice color palette</a>
      </div>
      <div className="inputGroup">
        <label>Text Container Width: </label>
        <input type="text" onChange={onChangeTextContainerWidth} value={textContainerWidth} />px
      </div>
      <hr />
      <h2>Background Image</h2>
      <div className="inputGroup">
        <label>Background Image URL: </label>
        <input style={{ width: '350px' }} type="text" onChange={onChangeBackgroundImageUrl} value={backgroundImageUrl} />
        <br /><br />
        Find a new image by typing in what you want to search for below and click "Find an image". Ignore the ad results at the top of the page. When you find the image you like, click to expand, then right click on the right size on the enlarged image and right click &gt; "Copy Image Address". Then come back to this page and paste into the Background Image URL field above. You can then adjust the size and position settings below.<br /><br />
        <input type="text" onChange={onChangeBackgroundImageUrlSearch} value={backgroundImageUrlSearch} /><a href={googleSearch} type="button" target="_blank" rel="noreferrer">Find an image</a>
      </div>
      <div className="inputGroup">
        <label>Background Position: </label>
        <input type="text" onChange={onChangeBgPosition} value={backgroundPosition} /> (ex. bottom left, top right)
      </div>
      <div className="inputGroup">
        <label>Background Size: </label>
        <input type="text" onChange={onChangeBgSize} value={backgroundSize} />px
      </div>
    </div>
  );
}

export default App;
