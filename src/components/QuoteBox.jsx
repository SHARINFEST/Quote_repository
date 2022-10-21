import React from 'react'
import EverythingBox from './EverythingBox'

const QuoteBox = ({randomQuote, randomColor,getRandomAll}) => {

    const colorObj = {
        color : randomColor
    }
   

  return (
    <div style={colorObj} className='card'>
   <p className='card_quote'>{randomQuote.quote}</p>
   <h1 className='card_author'>{randomQuote.author} </h1>
   <EverythingBox 
   getRandomAll={getRandomAll}
   randomColor={randomColor} />

    </div>
  ) 
}

export default QuoteBox