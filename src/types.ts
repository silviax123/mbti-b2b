export const questionType = ['E', 'S', 'T', 'J']

export type Domain = typeof questionType[number] // combine them into a union type. ensure 'Domain' can only have one of the four possible values

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

export type Answer = {
  questionType: Domain
  score: number
}