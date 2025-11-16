import SingleQuestionFlow from "../features/SingleQuestionFlow";
import {firstQuizQuestions} from "../config/quizes/firstQuiz.ts";
import {PageLayout} from "../widgets/PageLayout";
import {useNavigate} from "react-router-dom";

export const FirstQuizPage = () => {
    const navigate = useNavigate();

    const onFinish = (answers: Record<string, string>) => {
        console.log("все ответы:", answers)

        try {
            console.log("aaaa")
        } catch (e) {
            console.error(e)

        } finally {
            navigate("/user")
        }
    }


    return (
        <PageLayout title={"Опрос на тип личности"}>
            <SingleQuestionFlow
                questions={firstQuizQuestions}
                immediatelyNext={true}
                onFinish={onFinish}
            />

        </PageLayout>
    )
}
