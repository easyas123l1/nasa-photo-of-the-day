import React, {useState, useEffect} from "react";
import AstroPicker from './AstroPicker';
import axios from 'axios';

function AstroContainer()  {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('2019-10-09');
  const [HD, setHD] = useState('false');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?date=2019-10-09&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
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
        Date: <input className='input' type='text' date=''></input>
        HD: <input className='input' type='text' hd='false'></input>
        <button onClick={() => {
          console.log(date)
          setDate(date)}}>Submit</button>
      </form>
      <AstroPicker data={data} />
    </div>
  )
}

export default AstroContainer;