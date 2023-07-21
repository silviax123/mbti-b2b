import { RadioGroup } from "@radix-ui/react-radio-group";
import Radio from "@mui/joy/Radio";
import { FormControl, FormControlLabel } from "@mui/material";
import "./container.css";
import { Choice, Choices, Question } from "../types";
import { ChoiceButton } from "./ChoiceButton";
import AnimalWithContainer from "./AnimalWithContainer";
import ChoicesData from "../data/choices.json"

interface Props {
  question: Question;
  choices: Choice[];
  score: number;
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
