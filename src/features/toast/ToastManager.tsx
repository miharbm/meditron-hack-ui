// Типы, которые вы определили:
export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
}

class ToastManager {
    private toasts: Toast[] = [];
    private listeners: Array<(toasts: Toast[]) => void> = [];

    subscribe(listener: (toasts: Toast[]) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify() {
        this.listeners.forEach(listener => listener([...this.toasts]));
    }

    show(toast: Omit<Toast, 'id'>) {
        const id = Math.random().toString(36).substr(2, 9);
        this.toasts.push({ ...toast, id });
        this.notify();
        return id;
    }

    remove(id: string) {
        this.toasts = this.toasts.filter(toast => toast.id !== id);
        this.notify();
    }

    success(title: string, message?: string) {
        return this.show({ type: 'success', title, message });
    }

    error(title: string, message?: string) {
        return this.show({ type: 'error', title, message });
    }

    warning(title: string, message?: string) {
        return this.show({ type: 'warning', title, message });
    }

    info(title: string, message?: string) {
        return this.show({ type: 'info', title, message });
    }
}

export const toast = new ToastManager(); // Экземпляр синглтона
