import './container.css';
import photoINTP from '../assets/profile-photo/profile-INTP.png'
import dialog_box from '../assets/res1.png'
import BarChart from './BarChart';
import PercentageAndFigureType from './PercentageAndType';
import Label from './Label';




const IndexOfAnswer = () => {
  return (
    <div className="answer-container">
      <div>
        <h1>你的mbti属性是:</h1>
      </div>

      <div>
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

      <BarChart></BarChart>
      <PercentageAndFigureType />
      <Label/>



    </div>
  )
}

export default IndexOfAnswer;



