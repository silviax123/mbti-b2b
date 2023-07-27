import './container.css';
import ResultData from "../data/results.json";
import { useEffect, useState } from 'react';
import photoINTP from '../assets/profile-photo/profile-INTP.png'
import dialog_box from '../assets/res1.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import ShowTags from './ShowTags';


const IndexOfAnswer = () => {
  const storedData = localStorage.getItem('sumData');
  let result = "";

  if (storedData) {
    const resultData = JSON.parse(storedData);

    result += resultData["E"] >= 0 ? "E" : "I";
    result += resultData["S"] >= 0 ? "S" : "N";
    result += resultData["T"] >= 0 ? "T" : "F";
    result += resultData["J"] >= 0 ? "J" : "P";
  }
  console.log(result)

  const matchedpersonality = ResultData.find(item => item.id === result)

  return (
    <div className="answer-container">
      <div>
        <h1>你的mbti属性是:</h1>
        <div><i>{result}</i></div>
        <div>{matchedpersonality?.name}</div>
      </div>
      <div>
        <img src={photoINTP} alt='INTP' className='profile-photo' />
      </div>
      
      <div className="oneWord">
        <img src={dialog_box} width="100%" alt='intp'/>
        <p className='oneWordtxt'>“{matchedpersonality?.slogan}”</p>
      </div>
      {/* <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart> */}
      <div>
        {matchedpersonality?.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </div>

    </div>
  )
}

export default IndexOfAnswer;