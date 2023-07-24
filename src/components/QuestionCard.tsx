import { RadioGroup } from "@radix-ui/react-radio-group";
import { FormControl, FormControlLabel } from "@mui/material";
import "./container.css";
import { Choice, Choices, Question } from "../types";
import { ChoiceButton } from "./ChoiceButton";
import AnimalWithContainer from "./AnimalWithContainer";
import ChoicesData from "../data/choices.json"
import QuestionData from "../data/questions.json";


interface Props {
  number?: Number
  question: Question;
  choices: Choice[];
  totalScore?: number;
  onAnswer: (c: Choice) => void;
}

const QuestionCard = (props: Props) => {
  const choicesData = ChoicesData as Choices;
  const choices = choicesData[props.question.questionOrder].map((choice) => (
    <FormControlLabel
      value={choice.score}
      key={choice.score+1}
      control={<ChoiceButton choice={choice} onClick={props.onAnswer} />}
      label={choice.text}
    />
  ));
  console.log(choices)

  return (
    <div>
      <AnimalWithContainer>{props.question.text}</AnimalWithContainer>
      <FormControl>
        <RadioGroup className="answerRadioGroupContainer">
          {choices}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default QuestionCard;
