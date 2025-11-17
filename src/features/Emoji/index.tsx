// Emoji.tsx
import React from "react";

export type EmojiName =
    | "sad"
    | "anger"
    | "fear"
    | "guilt"
    | "envy"
    | "frustration"
    | "joy"
    | "neutral"
    | "superJoy";

// Импорт SVG как React-компонентов
import Sad from "../../shared/icons/emojis/sadness.svg?react";
import Anger  from "../../shared/icons/emojis/anger.svg?react";
import Fear  from "../../shared/icons/emojis/fear.svg?react";
import Guilt  from "../../shared/icons/emojis/guilt.svg?react";
import Envy  from "../../shared/icons/emojis/envy.svg?react";
import Frustration  from "../../shared/icons/emojis/frustration.svg?react";
import Joy  from "../../shared/icons/emojis/joy.svg?react";
import Neutral  from "../../shared/icons/emojis/default.svg?react";
import SuperJoy  from "../../shared/icons/emojis/superjoy.svg?react";

const emojiMap: Record<EmojiName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    sad: Sad,
    anger: Anger,
    fear: Fear,
    guilt: Guilt,
    envy: Envy,
    frustration: Frustration,
    joy: Joy,
    neutral: Neutral,
    superJoy: SuperJoy,
};

interface EmojiProps {
    name: EmojiName;
    size?: number;
}

export const Emoji: React.FC<EmojiProps> = ({ name, size = 64 }) => {
    const Icon = emojiMap[name];
    return <Icon width={size} height={size} />;
};
