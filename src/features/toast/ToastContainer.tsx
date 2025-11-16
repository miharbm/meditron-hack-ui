// src/widgets/toast/ui/ToastContainer.tsx
import { useState, useEffect } from 'react';
import ToastItem from "./ToastItem.tsx";
import {toast} from "./ToastManager.tsx";

// Типы
export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
}

export function ToastContainer() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        // Подписываемся на изменения в ToastManager
        return toast.subscribe(setToasts);
    }, []);

    return (
        <div className="fixed top-6 right-6 z-50 space-y-3 max-w-md w-full pointer-events-none">
            {toasts.map(toastItem => (
                <ToastItem
                    key={toastItem.id}
                    {...toastItem}
                    onClose={toast.remove.bind(toast)} // Передаем метод удаления
                />
            ))}
        </div>
    );
}
