import { TabBar } from "antd-mobile";
import { Home, User } from "lucide-react";
import { useState } from "react";

export const BottomNav = () => {
    const [active, setActive] = useState("home");

    return (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <TabBar activeKey={active} onChange={setActive}>

                <TabBar.Item
                    key="home"
                    title="Home"
                    icon={<Home size={22} />}
                />

                <TabBar.Item
                    key="profile"
                    title="Profile"
                    icon={<User size={22} />}
                />

                {/* Если понадобятся настройки:
        <TabBar.Item
          key="settings"
          title="Settings"
          icon={<Settings size={22} />}
        />
        */}

            </TabBar>
        </div>
    );
};

