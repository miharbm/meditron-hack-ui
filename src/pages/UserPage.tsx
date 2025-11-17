import { useMeQuery } from "../shared/api/baseApi";
import { Card, Button, Toast, SpinLoading } from "antd-mobile";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
    const { data, isLoading, error } = useMeQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        Toast.show({ content: "Вы вышли из аккаунта", icon: 'success' });
        navigate("/login");
    };

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <SpinLoading color="primary" />
            </div>
        );
    }

    if (error || !data) {
        return <div style={{ padding: 20, color: "red" }}>Не удалось загрузить данные пользователя.</div>;
    }

    return (
        <div style={{ padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flex: 1 }}>
            <Card title={`${data.first_name} ${data.second_name}`} style={{ marginBottom: 16 }}>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>Тест:</strong> {data.test_id ?? "Не пройден"}</p>
                {/*<p><strong>Дата создания:</strong> {new Date(data.created_at).toLocaleString()}</p>*/}
            </Card>

            <Button onClick={() => navigate("/first-quiz")} style={{marginTop: 100}}>
                Вступительный тест
            </Button>

            <Button color="default" block onClick={handleLogout} >
                Выйти
            </Button>
        </div>
    );
};
