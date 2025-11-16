import { NavBar } from "antd-mobile";
import type {ReactNode} from "react";
import { useNavigate } from "react-router-dom";

interface PageLayoutProps {
    title?: string;
    children: ReactNode;
    back?: boolean; // показывать ли кнопку назад
}

export const PageLayout = ({ title, children, back = true }: PageLayoutProps) => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: "100vh", background: "#fff" }}>
            {title && (
                <NavBar onBack={back ? () => navigate(-1) : undefined}>
                    {title}
                </NavBar>
            )}

            <div style={{ padding: 16 }}>
                {children}
            </div>
        </div>
    );
};
