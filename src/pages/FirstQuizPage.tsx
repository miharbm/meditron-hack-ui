import SingleQuestionFlow from "../features/SingleQuestionFlow";
import {firstQuizQuestions} from "../config/quizes/firstQuiz.ts";
import {PageLayout} from "../widgets/PageLayout";
import {useNavigate} from "react-router-dom";
import {useOnboardingTestMutation} from "../shared/api/baseApi.ts";

export const FirstQuizPage = () => {
    const navigate = useNavigate();
    const [onboardingTest] = useOnboardingTestMutation();

    const onFinish = async (answers: Record<string, string>) => {
        const results: boolean[] = Object.values(answers).map((answer) => answer === "Да");

        console.log("все ответы:", results);
        console.log("все ответы:", answers)

        try {
            await onboardingTest(results)
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
