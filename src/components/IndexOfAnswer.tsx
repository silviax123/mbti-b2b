import './container.css';
import ResultData from "../data/results.json";
import { Children, useEffect, useState } from 'react';
import photoINTP from '../assets/profile-photo/profile-INTP.png'
import dialog_box from '../assets/res1.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import ShowTags from './ShowTags';
import ContainerWithTitle from './ContainerWithTitle';
import { match } from 'assert';


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

  // const [matchedpersonality, setMatchedpersonality] = useState(false);

  const matchedpersonality = ResultData.find(item => item.id === result)
  const descriptionData = matchedpersonality?.description

  return (
    <div className="answer-container"
      // onLoad={()=> }
    >
      <div>
        <h1>你的mbti属性是:</h1>
        <h1>{result}</h1>
        <h1>{matchedpersonality?.name}</h1>
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
      <div className='label'>
        {matchedpersonality?.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </div>

      <ContainerWithTitle> 
        <h1 className='title-text'>人格描述</h1>
        {matchedpersonality?.description}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>人格特征</h1>
        {matchedpersonality?.character}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>职业发展</h1>
        {matchedpersonality?.career}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>人格优势</h1>
        {matchedpersonality?.advantages}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>人格劣势</h1>
        {matchedpersonality?.disadvantages}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>代表人物</h1>
        {matchedpersonality?.famous}
      </ContainerWithTitle>
      <ContainerWithTitle> 
        <h1 className='title-text'>CP组合</h1>
        {matchedpersonality?.couple}
      </ContainerWithTitle>
    </div>
  )
}

export default IndexOfAnswer;