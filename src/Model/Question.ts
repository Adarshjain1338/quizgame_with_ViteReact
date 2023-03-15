interface QuestionObject {
  id: Number;
  Category: String; //react ,.net
  Technical: boolean
  Question: String;
  questionType: String; //'boolean','multiple'
  Options: any[];
  CorrectAnswer: Number[];
}

export default QuestionObject;
