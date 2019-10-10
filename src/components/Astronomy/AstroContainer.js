import React, {useState, useEffect} from "react";
import AstroPicker from './AstroPicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function AstroContainer()  {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('2019-10-09');
  const [HD, setHD] = useState('false');
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
      console.log(result);
      setData(result.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [date])

  return (
    <div className='container'>
      <h2>Astronomy Picture of the Day</h2>
      <p>please type true or false in HD for High Definiton!</p>
      <form className='form'>
        <DatePicker
        className='inputDate'
        todayButton="Today"
        selected={startDate}
        onChange={date => {
          let newday = date.getDate();
          let newyear = date.getFullYear();
          let newmonth = date.getMonth()
          newmonth += 1;
          if (newmonth < 10) {
            newmonth = '0' + newmonth;
          }
          let newdate = `${newyear}-${newmonth}-${newday}`
          setDate(newdate)
          setStartDate(date)
        }}
        />
        Date
        <input  className='inputHd' type='text' hd='false'></input>
        HD
        <button className='submitBut' onClick={(e) => {
          e.preventDefault();
          console.log('this is date', date)
          }}>Submit</button>
      </form>
      <AstroPicker data={data} />
    </div>
  )
}

export default AstroContainer;