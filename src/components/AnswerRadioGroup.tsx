import { RadioGroup }  from '@radix-ui/react-radio-group';
import Radio from '@mui/joy/Radio';
import { FormControl, FormControlLabel } from '@mui/material';
import './container.css';
import React from 'react';

interface AnswerRadioGroupProps {
  question: string;
  options: {
    label: string;
    score: number;
  }[];
  onNext: () => void;
}

const AnswerRadioGroup: React.FC<AnswerRadioGroupProps> = () => {
  const [value, setvalue] = React.useState();


  return (
    <FormControl>
      <RadioGroup className='answerRadioGroupContainer'>
        <FormControlLabel 
          value="-2" 
          control={<Radio size="lg"/>} 
          label=" A. strongly agree" 
        />
        <FormControlLabel 
          value="-1" 
          control={<Radio size="lg"/>} 
          label=" B. agree" 
          />
        <FormControlLabel 
          value="1" 
          control={<Radio size="lg"/>} 
          label=" C. disagree" />
        <FormControlLabel 
          value="1" 
          control={<Radio size="lg"/>} 
          label=" D. strongly disagree" />
      </RadioGroup>
    </FormControl>
  );
};

export default AnswerRadioGroup;