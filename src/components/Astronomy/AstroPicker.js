import React from "react";



const AstroPicker = props => {
  return (
    <div>
      {
        props.data.hdurl 
        ? (<img className='pictureOfTheDay' alt='Astronomy Picture Of The Day!' src={props.data.hdurl} /> ) 
        : 
        (<iframe className='pictureOfTheDay' src={props.data.url} />)
      }
      <p>Copyright: {props.data.copyright}</p>
      <p>Date: {props.data.date}</p>
      <p>Explanation: {props.data.explanation}</p>
    </div>
  )
}

export default AstroPicker;