import { Choice } from '../types';
import Radio from '@mui/joy/Radio';
interface Props {
  choice: Choice;
  onClick: (choice: Choice) => void;
}

export function ChoiceButton({ choice, onClick }: Props) {
  return (
    <Radio 
      onClick={() => {onClick(choice)}}>
      {choice.text}
    </Radio>
  );
}