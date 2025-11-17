import { Form, Input, Button, Toast } from "antd-mobile";
import { useRegisterMutation } from "../shared/api/authApi";
import { useNavigate } from "react-router-dom";
import {PageLayout} from "../widgets/PageLayout";

const RegisterPage = () => {
    const [register, { isLoading }] = useRegisterMutation();
    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        try {
            await register(values).unwrap();
            Toast.show({ icon: "success", content: "Регистрация успешна" });
            navigate("/login");
        } catch {
            Toast.show({ icon: "fail", content: "Ошибка регистрации" });
        }
    };

    return (
        <PageLayout title={"Регистрация"}>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                footer={
                    <Button block type="submit" color="primary" loading={isLoading}>
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

                <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
                    <Input type="password" />
                </Form.Item>

                <Form.Item label="О себе" name="description" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>

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
