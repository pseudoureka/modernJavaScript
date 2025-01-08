import { createColorSurvey, getColorSurvey, getColorSurveys } from "./api.js";

// const data = await getColorSurveys();
// console.log(data);

// const data = await getColorSurvey(10);
// console.log(data);

const surveyData = {
  mbti: "ENFP",
  colorCode: "#ff0000",
  password: "1234",
};

const data = await createColorSurvey(surveyData);
console.log(data);
