import { useState } from 'react'
import quotes from './json/quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'
// import ColorBox from './components/ColorBox'
// import EverythingBox from './components/EverythingBox'



function App() {

   // calcula un indcie random
  const GetIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[GetIndexRandom(quotes)]
  const firstColor = color[GetIndexRandom(color)]

  const [randomQuote, setrandomQuote] = useState(firstQuote)


  const [randomColor, setrandomColor] = useState(firstColor)

  const getRandomAll = ()=>{
    setrandomQuote (quotes[GetIndexRandom(quotes)])
    setrandomColor(color[GetIndexRandom(color)])
  }

  return (
    <article style={{ backgroundColor: randomColor}} className="App">
      <QuoteBox 
      randomQuote={randomQuote} 
      getRandomAll={getRandomAll}
      randomColor={randomColor}

      />
       
    </article>
  )
}

export default App
