import { Card, ProgressBar } from "antd-mobile";
import { Flame, CalendarDays } from "lucide-react";

interface StreakCardProps {
    streak: number;           // количество подряд дней
    dailyProgress?: number;   // прогресс за сегодня (0–100)
    lastVisitDate?: string;   // дата последнего визита (опционально)
}

export const StreakCard = ({
                               streak,
                               dailyProgress,
                               lastVisitDate,
                           }: StreakCardProps) => {
    return (
        <Card
            style={{
                borderRadius: 16,
                background: "linear-gradient(135deg, #ffe6c7, #ffc78c)",
                padding: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <Flame size={32} color="#ff6a00" />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>
                        Стрик {streak} дней 🔥
                    </div>
                    {lastVisitDate && (
                        <div style={{ fontSize: 14, opacity: 0.7 }}>
                            Последний визит: {lastVisitDate}
                        </div>
                    )}
                </div>
            </div>

            {dailyProgress && (
                <>
                    <div style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                        <CalendarDays size={18} style={{marginRight: 6}}/>
                        <span style={{fontSize: 14, opacity: 0.8}}>Прогресс за сегодня</span>
                    </div>

                    <ProgressBar
                        percent={dailyProgress}
                        style={{"--track-width": "8px", "--fill-color": "#ff6a00"}}
                    />
                </>
            )}


            <div style={{marginTop: 8, fontSize: 13, opacity: 0.6}}>
                Продолжай! Каждый визит поддерживает твою серию 🔥
            </div>
        </Card>
    );
};
