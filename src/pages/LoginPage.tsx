import LoginForm from "../features/LoginForm/LoginForm.tsx";
import {PageLayout} from "../widgets/PageLayout";

export const LoginPage = () => {
    return (
        <PageLayout title={"Вход"}>
            <LoginForm/>
        </PageLayout>
    )
}
