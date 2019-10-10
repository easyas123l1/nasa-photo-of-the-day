import React, {useState, useEffect} from "react";
import AstroPicker from './AstroPicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
import axios from 'axios';

const DivContainer = styled.div`
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

const HeaderText = styled.h2`

`;

const ParagraphText = styled.p`

`;

const FormEntry = styled.form`
  margin: 1%;
`;

const SubmitButton = styled.button`
  margin: 10px;
`;

const InputField = styled.input`
  margin: 10px;
`;

function AstroContainer()  {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('2019-10-10');
  //const [HD, setHD] = useState('false');
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=BcxwtY8phmGU8SoVYhotzrrcdrLnG3l8iVWJWJVn`)
    .then(result => {
      setData(result.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [date])

  return (
    <DivContainer className='container'>
      <HeaderText>Astronomy Picture of the Day</HeaderText>
      <AstroPicker data={data} />
      <ParagraphText>please type true or false in HD for High Definiton!</ParagraphText>
      <FormEntry className='form'>
        <DatePicker
        className='inputDate'
        todayButton="Today"
        selected={startDate}
        onChange={date => {
          let newday = date.getDate();
          let newyear = date.getFullYear();
          let newmonth = date.getMonth();
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
        <InputField  className='inputHd' type='text' hd='false'></InputField>
        HD
        <SubmitButton className='submitBut' onClick={(e) => {
          e.preventDefault();
          console.log('this is date', date)
          }}>Submit</SubmitButton>
      </FormEntry>
    </DivContainer>
  )
}

export default AstroContainer;