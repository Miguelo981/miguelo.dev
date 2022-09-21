import { useTranslation } from "react-i18next";
import { handleMenuScroll } from "../Lists/NavList";

type ContactButtonProps = {
    text?: string;
    className?: string;
}

export default function ContactButton({ text, className }: ContactButtonProps) {
    const { t, i18n } = useTranslation();

    return (
        <button onClick={() => handleMenuScroll('contact-me')} className={ className || "m-grad-btn-1 rounded-sm text-2xl lg:text-4xl px-12 py-4 mx-auto" }>{text || t('contact.me') }</button>
    )
};