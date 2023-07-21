export type Question = {
  id: string;
  text: string;
  questionType: 'E'| 'S'| 'T'| 'J';
  questionOrder: 'plus' | 'minus';
}

export type Choice = {
  text: string
  score: number
}

export type Choices = {
  plus: Choice[]
  minus: Choice[]
}