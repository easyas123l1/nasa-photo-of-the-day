import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  width: 800px;
  height: 800px;
  object-fit: scale;
  flex-shrink: 2;
`;

const Video = styled.iframe`
  width: 800px;
  height: 800px;
  object-fit: scale;
  flex-shrink: 2;
`;



const AstroPicker = props => {
  return (
    <div>
      {
        props.data.hdurl 
        ? (<Image className='pictureOfTheDay' alt='Astronomy Picture Of The Day!' src={props.data.hdurl} /> ) 
        : 
        (<Video className='pictureOfTheDay' src={props.data.url} />)
      }
      <p>Copyright: {props.data.copyright}</p>
      <p>Date: {props.data.date}</p>
      <p>Explanation: {props.data.explanation}</p>
    </div>
  )
}

export default AstroPicker;