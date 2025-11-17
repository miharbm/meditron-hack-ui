import { TabBar } from "antd-mobile";
import {HeartPlus, Home, User} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomNav = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <TabBar
                activeKey={pathname}
                onChange={(val) => navigate(val)}
            >
                <TabBar.Item
                    key="/home"
                    title="Главная"
                    icon={<Home size={22} />}
                />

                <TabBar.Item
                    key="/quiz"
                    title="Опрос"

                    icon={<HeartPlus size={22}/>}
                />

                <TabBar.Item
                    key="/user"
                    title="Профиль"
                    icon={<User size={22} />}
                />
            </TabBar>
        </div>
    );
};
