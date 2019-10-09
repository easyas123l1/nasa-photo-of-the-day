import React, {useState, useEffect} from "react";
import AstroPicker from './AstroPicker';
import axios from 'axios';

function AstroContainer()  {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?date=2019-08-15&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
      //console.log(result.data);
      setData(result.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className='container'>
      <h2>Astronomy Picture of the Day</h2>
      <p>enter in date as YYYY-MM-DD to get that days picture and true or false in HD for High Definiton!</p>
      <form className='form'>
        date: <input className='input' type='text' date='2019-10-09'></input>
        hd: <input className='input' type='text' hd='false'></input>
      </form>
      <AstroPicker data={data} />
    </div>
  )
}

export default AstroContainer;