import { useState } from "react";
import { Form, Input, Button, Toast } from "antd-mobile";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: { email: string; password: string }) => {
        setLoading(true);
        try {
            console.log("email:", values.email);
            console.log("password:", values.password);

            Toast.show({
                icon: "success",
                content: "Вход выполнен",
            });
        } catch (e) {
            console.error(e)
            Toast.show({
                icon: "fail",
                content: "Ошибка входа",
            });
        }
        setLoading(false);
    };

    return (
        <div
            style={{
                padding: "24px",
                maxWidth: 420,
                margin: "0 auto",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Вход</h2>

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
        </div>
    );
}
