import { Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "./EmotionSelector.module.scss";
import {Emoji, type EmojiName} from "../Emoji";

interface EmotionItem {
    name: EmojiName;
    label: string;
}

const emotions: EmotionItem[] = [
    { name: "superJoy", label: "Сверхрадость" },
    { name: "joy", label: "Радость" },
    { name: "neutral", label: "Нейтральность" },
    { name: "frustration", label: "Фрустрация" },
    { name: "anger", label: "Злость" },
    { name: "fear", label: "Страх" },
    { name: "guilt", label: "Вина" },
    { name: "envy", label: "Зависть" },
];

export const EmotionSelector = () => {
    const navigate = useNavigate();

    const selectEmotion = async (emotion: EmotionItem) => {
        try {
            console.log(emotion)
            // запрос можно заменить на RTK Query, fetch, axios — что угодно
            await new Promise((res) => setTimeout(res, 400));

            Toast.show({
                icon: "success",
                content: "Эмоция сохранена!",
            });

            navigate("/"); // переход на главную
        } catch {
            Toast.show({
                icon: "fail",
                content: "Ошибка сохранения",
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                {emotions.map((e, i) => {
                    const angle = (i / emotions.length) * 2 * Math.PI;
                    const radius = 120;

                    const x = 140 + radius * Math.cos(angle);
                    const y = 140 + radius * Math.sin(angle);

                    return (
                        <div
                            key={e.name}
                            className={styles.item}
                            style={{ left: x, top: y }}
                            onClick={() => selectEmotion(e)}
                        >
                            <Emoji name={e.name} size={48} />
                            <div className={styles.label}>{e.label}</div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};
