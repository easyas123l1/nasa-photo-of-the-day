import React, {useState, useEffect} from "react";
import AstroPicker from './AstroPicker';
import axios from 'axios';

function AstroContainer()  {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?date=2019-08-15&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
      console.log(result.data);
      setData(result);
    })
  }, [])

  return (
    <div>
      <form>
        date: <input type='text' date='2019-10-09'></input>
        hd: <input type='text' hd='false'></input>
      </form>
      <AstroPicker data={data} />
    </div>
    
  )
}

export default AstroContainer;