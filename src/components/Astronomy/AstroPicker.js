import React from "react";



const AstroPicker = props => {
  console.log('this is props', props.data.data);
  return (
    <div>
      <img className='pictureOfTheDay' alt='Astronomy Picture Of The Day!' src={props.data.data} />
      <p>Copyright: </p>
      <p>Date: </p>
      <p>Explanation: </p>
    </div>
  )
}

export default AstroPicker;