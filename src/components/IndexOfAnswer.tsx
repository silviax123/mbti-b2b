import './container.css';
import { useEffect, useState } from 'react';
import photoINTP from '../assets/profile-photo/profile-INTP.png'
import dialog_box from '../assets/res1.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const IndexOfAnswer = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const storedData = localStorage.getItem('sumData');
    if (storedData) {
        const sumData = JSON.parse(storedData);
        const dataArray = Object.keys(sumData).map(key => ({name: key, value: sumData[key]}));
        console.log("dataArray:", dataArray)
        // setData(dataArray);
    }
}, []);

  return (
    <div className="answer-container">
      <div>
        <h1>你的mbti属性是:</h1>
        <div><i>INTP</i></div>
        <div>逻辑学家/学者型人格</div>
      </div>
      <div>
        <img src={photoINTP} alt='INTP' className='profile-photo' />
      </div>
      
      <div className="oneWord">
        <img src={dialog_box} width="100%" alt='intp'/>
        <p className='oneWordtxt'>“ 让我观察一下再说！ ”</p>
      </div>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

    </div>
  )
}

export default IndexOfAnswer;



