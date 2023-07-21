import { Choice } from '../types';
import Radio from '@mui/joy/Radio';


interface Props {
  choice: Choice;
  onClick: (choice: Choice) => void;
}

export function ChoiceButton(props: Props) {
  return (
    <Radio 
      onClick={(e) => {props.onClick(props.choice)}}>
      {props.choice.text}
    </Radio>
  );
}