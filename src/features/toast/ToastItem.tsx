import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'

// Типы, которые могут быть вынесены в shared/types, но для простоты могут быть и здесь,
// если они специфичны только для этого компонента или сущности.
export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
    id: string
    type: ToastType
    title: string
    message?: string
    duration?: number
}

interface ToastProps extends Toast {
    onClose: (id: string) => void
}

function ToastItem({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Появление с анимацией
        setTimeout(() => setIsVisible(true), 10)

        // Автоматическое скрытие
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => onClose(id), 300)
        }, duration)

        return () => clearTimeout(timer)
    }, [id, duration, onClose])

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <XCircle className="w-5 h-5 text-red-500" />,
        warning: <AlertCircle className="w-5 h-5 text-orange-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />
    }

    const colors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        warning: 'bg-orange-50 border-orange-200',
        info: 'bg-blue-50 border-blue-200'
    }

    return (
        <div
            className={`
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        max-w-md w-full bg-white shadow-xl rounded-xl border-2 ${colors[type]}
        pointer-events-auto min-w-80
      `}
        >
            <div className="p-5">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-0.5">
                        {icons[type]}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-gray-900 leading-5 break-words">
                            {title}
                        </p>
                        {message && (
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed break-words">
                                {message}
                            </p>
                        )}
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 transition-colors"
                            onClick={() => onClose(id)}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToastItem
