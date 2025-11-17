import { Form, Input, Button, Toast } from "antd-mobile";
import {useLoginMutation} from "../../shared/api/authApi.ts";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const [login, { isLoading: loading }] = useLoginMutation();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            await login(values).unwrap();
            Toast.show({ icon: 'success', content: 'Успешный вход' });
            navigate("/");
        } catch (e: any) {
            Toast.show({ icon: 'fail', content: 'Ошибка входа' });
        }
    };

    return (
        <div
            style={{
                maxWidth: 420,
                margin: "40px auto 0",
            }}
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
                footer={
                    <Button
                        block
                        type="submit"
                        color="primary"
                        loading={loading}
                        size="large"
                    >
                        Войти
                    </Button>
                }
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Введите email" }]}
                >
                    <Input type="email" placeholder="example@mail.com" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[{ required: true, message: "Введите пароль" }]}
                >
                    <Input type="password" placeholder="••••••••" />
                </Form.Item>
            </Form>

            <Button
                block
                fill="outline"
                style={{ marginTop: 16 }}
                onClick={() => navigate("/register")}
            >
                Нет аккаунта? Регистрация
            </Button>
        </div>
    );
}
