import { useTranslation } from "react-i18next";
import { handleMenuScroll } from "../Lists/NavList";

type ContactButtonProps = {
    text?: string;
    className?: string;
}

export default function ContactButton({ text, className }: ContactButtonProps) {
    const { t } = useTranslation();

    return (
        <button onClick={() => handleMenuScroll('contact-me')} className={ className || "app-btn mx-auto" }>{text || t('contact.me') }</button>
    )
};