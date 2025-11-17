import { Form, Input, Button, Toast } from "antd-mobile";
import {useLoginMutation, useRegisterMutation} from "../shared/api/authApi";
import { useNavigate } from "react-router-dom";
import {PageLayout} from "../widgets/PageLayout";

const RegisterPage = () => {
    const [register, { isLoading, error }] = useRegisterMutation();
    const [login, { isLoading: loading }] = useLoginMutation();

    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        try {
            console.log(values)

            await register(values).unwrap();
            Toast.show({ icon: "success", content: "Регистрация успешна" });

            onFinish({email: values.email, password: values.password})
        } catch {
            Toast.show({ icon: "fail", content: "Ошибка регистрации" });
        }
    };

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            await login(values).unwrap();
            Toast.show({ icon: 'success', content: 'Успешный вход' });
            navigate("/");
        } catch (e: any) {
            console.error(e)
            Toast.show({ icon: 'fail', content: 'Ошибка входа' });
        }
    };

    return (
        <PageLayout title={"Регистрация"}>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                footer={
                    <Button block type="submit" color="primary" loading={isLoading || loading}>
                        Зарегистрироваться
                    </Button>
                }
            >
                <Form.Item label="Имя" name="first_name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Фамилия" name="second_name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Пароль (одна большая буква и цифра требуется)" name="password" rules={[{ required: true }]}>
                    <Input type="password" />
                </Form.Item>

                <Form.Item label="О себе" name="description" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>

            {JSON.stringify(error)}

            <Button
                block
                fill="outline"
                style={{ marginTop: 16 }}
                onClick={() => navigate("/login")}
            >
                Уже есть аккаунт? Войти
            </Button>
        </PageLayout>
    );
};

export default RegisterPage;
