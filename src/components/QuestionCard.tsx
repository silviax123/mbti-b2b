import { RadioGroup } from "@radix-ui/react-radio-group";
import { FormControl, FormControlLabel } from "@mui/material";
import "./container.css";
import { Choice, Choices, Question } from "../types";
import { ChoiceButton } from "./ChoiceButton";
import AnimalWithContainer from "./ContainerWithAnimal";
import ChoicesData from "../data/choices.json"
import { useState } from "react";

interface Props {
  question: Question;
  choices: Choice[];
  // questionType: Domain
  onAnswer: (c: Choice) => void;
}

const QuestionCard = (props: Props) => {
  const choicesData = ChoicesData as Choices;

  const [selectedChoice, setSelectedChoice] = useState<Boolean>(false);

  const handleChoiceClick = (choice: Choice) => {
    setSelectedChoice(true);
    props.onAnswer(choice);
  }

  const choices = choicesData[props.question.questionOrder].map((choice) => (
    <FormControlLabel 
      value={choice.score}
      key={choice.score+1}
      control={<ChoiceButton choice={choice} onClick={handleChoiceClick} />
      }
      label={choice.text}
    />
  ));
  console.log("choices:", choices)

  return (
    <div>
        <AnimalWithContainer> 
        <div className="question-text-container">
          {props.question.id}. {props.question.text}
        </div>
        </AnimalWithContainer>
      <FormControl>
        <RadioGroup className="answerRadioGroupContainer">
          {choices}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default QuestionCard;
