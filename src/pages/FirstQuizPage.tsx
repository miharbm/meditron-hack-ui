import SingleQuestionFlow from "../features/SingleQuestionFlow";
import {firstQuizQuestions} from "../config/quizes/firstQuiz.ts";
import {PageLayout} from "../widgets/PageLayout";

export const FirstQuizPage = () => {
    return (
        <PageLayout title={"Опрос на тип личности"}>
            <SingleQuestionFlow
                questions={firstQuizQuestions}
                immediatelyNext={true}
                onFinish={(answers) => {
                    console.log("все ответы:", answers)
                }}
            />

        </PageLayout>
    )
}
