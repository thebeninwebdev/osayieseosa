import {locales} from './config'

export type Locale = (typeof locales)[number]

export type ToastMessageContext = "default" | "info" | "success" | "warning" | "error"

export interface IToastMessageProps {
    message: string;
    context?: ToastMessageContext;
    onClose?: () => void
}

export interface IToastMessage {
    id: string;
    message: string;
    context: ToastMessageContext;
}