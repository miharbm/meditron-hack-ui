import { useState } from "react";
import { Radio, Space, Button, Card } from "antd-mobile";


export interface Question {
    id: string;
    question: string;
    options: string[];
}

interface Props {
    questions: Question[];
    onFinish?: (answers: Record<string, string>) => void;
}

const SingleQuestionFlow = ({ questions, onFinish }: Props) => {
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const current = questions[index];

    const handleAnswer = (value: string) => {
        const updated = { ...answers, [current.id]: value };
        setAnswers(updated);
    };

    const next = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1);
        } else {
            onFinish?.(answers);
        }
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const isAnswered = !!answers[current.id];

    return (
        <Card style={{ margin: 16, padding: 20 }}>
            <div>
                {index}/{questions.length}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>
                {current.question}
            </div>

            <Radio.Group
                value={answers[current.id]}
                onChange={(val) => handleAnswer(val as string)}
            >
                <Space direction="vertical">
                    {current.options.map((opt) => (
                        <Radio key={opt} value={opt}>
                            {opt}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>

            <Space justify="between" block style={{ marginTop: 24 }}>
                <Button
                    disabled={index === 0}
                    onClick={prev}
                    color="default"
                    fill="outline"
                >
                    Назад
                </Button>

                <Button
                    disabled={!isAnswered}
                    onClick={next}
                    color="primary"
                >
                    {index === questions.length - 1 ? "Готово" : "Далее"}
                </Button>
            </Space>
        </Card>
    );
};

export default SingleQuestionFlow;
