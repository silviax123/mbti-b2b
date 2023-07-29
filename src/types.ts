export const questionTypes = ['E', 'S', 'T', 'J']

export type Domain = typeof questionTypes[number] // combine them into a union type. ensure 'Domain' can only have one of the four possible values

export type Question = {
  id: string;
  text: string;
  questionType: Domain;
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

export type Result = {
  description: string
  character: string
  career: string
  advantages: string
  disadvantages: string
}

export type Answer = {
  questionType: Domain
  score: number
}

// export class Answer {
//   constructor(
//     public domain: Domain,
//     public score: number
//   ) {}
// }

export type ScoreResult = {
  score: number
  text: string
}

// Bunch of texts from json file
export type ResultText = {
  domain: Domain
  title: string
  shortDescription: string
  description: string
  results: ScoreResult[]
}

// Result of quiz
export type ResultTextItem = {
  domain: Domain
  title: string
  shortDescription: string
  description: string
  resultText: string
}