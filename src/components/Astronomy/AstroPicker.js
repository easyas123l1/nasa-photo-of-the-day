import React from "react";



const AstroPicker = props => {
  console.log('this is props', props.data);
  return (
    <div>
      <img className='pictureOfTheDay' alt='Astronomy Picture Of The Day!' src={props.data.hdurl} />
      <p>Copyright: {props.data.copyright}</p>
      <p>Date: {props.data.date}</p>
      <p>Explanation: {props.data.explanation}</p>
    </div>
  )
}

export default AstroPicker;