import React from "react";



const AsteroidPicker = props => {
  console.log('this is props for asteriod', props.data);
  return (
    <div>
      <p>Information on Near Earth Objects</p>
      <p>Copyright: {props.data.copyright}</p>
      <p>Date: {props.data.date}</p>
      <p>Explanation: {props.data.explanation}</p>
    </div>
  )
}

export default AsteroidPicker;