import React, {useState, useEffect} from "react";
import AsteroidPicker from './AsteroidPicker';
import styled from 'styled-components';
import axios from 'axios';

const divContainer = styled.div`
  background: lightblue;
  width: 100%;
  max-width: 850px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
  box-shadow: 0px 1px 6px -2px grey;
`;

function AsteroidContainer()  {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('2019-10-02');
  const [endDate, setEndDate] = useState('2019-10-09');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
      console.log('this is asteroid', result)
      setData(result.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <divContainer className='container'>
      <h2>Near Earth Object's</h2>
      <p>enter in start date & end date as YYYY-MM-DD</p>
      <form className='form'>
        Start Date: <input className='input' type='text' startDate=''></input>
        End Date: <input className='input' type='text' endDate=''></input>
        <button>Submit</button>
      </form>
      <AsteroidPicker data={data} />
    </divContainer>
  )
}

export default AsteroidContainer;