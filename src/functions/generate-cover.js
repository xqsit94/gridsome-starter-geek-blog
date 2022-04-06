const createImage = require("node-html-to-image")
const tinycolor = require("tinycolor2")

module.exports = async function(
  output,
  coverTitle,
  { imgHeight, imgWidth, colours }
) {

  console.log("Picking a main colour")
  let mainColour = randomColour()
  if (colours !== undefined && colours.constructor === Array) {
    mainColour = colours.random()
  }
  console.log("Main Colour: " + mainColour)
  console.log("Generating gradient")
  const firstColour = tinycolor(mainColour).darken(25).toString()
  const firstColourRGB = tinycolor(firstColour).toRgbString()
  const secondColour = tinycolor(mainColour).spin(50).toString()
  const secondColourRGB = tinycolor(secondColour).toRgbString()
  console.log("First Colour: " + firstColour + ", Second Colour: " + secondColour)
  const angle = Math.floor(Math.random() * 180)
  const gradient = `linear-gradient(-${angle}deg, ${firstColourRGB}, ${secondColourRGB})`
  console.log("Gradient: " + gradient)
  console.log("Generating title colours")
  const titleBG = tinycolor(mainColour).setAlpha(0.6).toHexString()
  const titleText = "#fff"
  const titleStroke = (tinycolor(mainColour).isLight() ? "-webkit-text-stroke: 0.5px black;" : "-webkit-text-stroke: 0.5px white;")

  console.log("Calculating font size for title")

  const titleFontSize = getFontSize(coverTitle)
  console.log("Font Size: " + titleFontSize)

  const template = `
    <html>
      <head>
        <style>
        @font-face {
          font-family: 'Arial Rounded MT Bold', sans-serif;
        }
        
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
  
        body {
          width: ${imgWidth}px;
          height: ${imgHeight}px;
          padding: 0px;
          background: ${gradient};
          color: #ffffff;
        }
  
        div.container {
          border: 1px black solid;
          position: absolute;
          width: ${imgWidth}px;
          height: ${imgHeight}px;
          top: 0px;
          left: 0px;
        }
        div.line {
          position: absolute;
          top: 40px;
          height: 10px;
          width: 100%;
          background: #fff;
          opacity: 0.2;
          z-index: 500;
        }
        div.circle1 {
          position: absolute;
          top: 55px;
          left: -40px;
          height: 175px;
          width: 175px;
          background-color: #fff;
          opacity: 0.3;
          border-radius: 50%;
          display: inline-block;
          z-index: 501;
        }
        div.circle2 {
            position: absolute;
            top: 355px;
            left: 275px;
            height: 275px;
            width: 275px;
            background-color: #fff;
            opacity: 0.3;
            border-radius: 50%;
            display: inline-block;
            z-index: 502;
        }
        div.circle3 {
            position: absolute;
            top: 120px;
            left: 500px;
            height: 120px;
            width: 120px;
            background-color: #fff;
            opacity: 0.3;
            border-radius: 50%;
            display: inline-block;
            z-index: 503;
        }
        div.circle4 {
            position: absolute;
            top: 70px;
            left: 700px;
            height: 80px;
            width: 80px;
            background-color: #fff;
            opacity: 0.3;
            border-radius: 50%;
            display: inline-block;
            z-index: 504;
        }
        div.circle5 {
            position: absolute;
            top: 300px;
            left: 700px;
            height: 75px;
            width: 75px;
            background-color: #fff;
            opacity: 0.2;
            border-radius: 50%;
            display: inline-block;
            z-index: 505;
        }
        div.circle6 {
            position: absolute;
            top: 360px;
            left: 800px;
            height: 110px;
            width: 110px;
            background-color: #fff;
            opacity: 0.2;
            border-radius: 50%;
            display: inline-block;
            z-index: 506;
        }
        div.triangle {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 200px 0 200px 400px;
          border-color: transparent transparent transparent #999;
          z-index: 507;
          opacity: 0.5;
          transform: rotate(-20deg);
        }
        div.star {
          position: absolute;
          bottom: -240px;
          left: -240px;
          background: #000;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          display: inline-block;
          height: 500px;
          width: 500px;
          opacity: 0.5;
        }
        div.titlecontainer {
          position: absolute;
          top: 0px;
          z-index: 9999;
          text-align: left;
          padding: 15px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        h1.title {
          font-size: ${titleFontSize};
          text-transform: capitalize;
          text-align: center;
          background-color: ${titleBG};
          color: ${titleText};
          padding: 15px;
          padding-top: 30px;
          padding-bottom: 30px;
          font-family: 'Arial Rounded MT Bold', sans-serif;
          ${titleStroke};
        }  
        </style>
      </head>
      <body>
        <div class="container">
          <div class="line"></div>
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
          <div class="circle6"></div>
          <div class="triangle"></div>
          <div class="star"></div>
          <div class="titlecontainer">
          <div class="titlecontainer">
              <h1 class="title">${coverTitle}</h1>
          </div>
        </div>
      </body>
    </html>
  `
  console.log("Creating image " + output)
  createImage({
    output,
    html: template,
  });
  return output
}

Array.prototype.random = function(){
  return this[Math.floor(Math.random()*this.length)];
}

// Generate a random hex colour
const randomColour = () => {
  const hexString = "0123456789abcdef"
  let hexCode = "#"
  for(let i = 0; i < 6; i++){
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode
}

// Generate the font size to use for the cover title
const getFontSize = (coverTitle) => {
  let fontSize = "4.0rem"
  if (coverTitle.length > 30)
    fontSize = "2.7rem"
  if (coverTitle.length > 24)
    fontSize = "3.2rem"
  return fontSize
}