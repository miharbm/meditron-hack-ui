import SingleQuestionFlow from "../features/SingleQuestionFlow";
import {firstQuizQuestions} from "../config/quizes/firstQuiz.ts";

export const FirstQuizPage = () => {
    return (
        <div>
            <SingleQuestionFlow
                questions={firstQuizQuestions}
                immediatelyNext={true}
                onFinish={(answers) => {
                    console.log("все ответы:", answers)
                }}
            />

        </div>
    )
}
