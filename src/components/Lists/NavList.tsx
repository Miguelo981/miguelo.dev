//import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import i18n, { DEFAULT_LANG } from '../../config/i18n.config';
//import i18n, { t } from "i18next";

type NavListProps = {
    className?: string;
    lang?: string;
}

const MENU_OPTIONS = [
    {
        text: "Inicio",
        id: "home",
        t: "home",
        href: ""
    },
    {
        text: "Sobre mi",
        id: "about-me",
        t: "aboutMe",
        href: ""
    },
    {
        text: "Servicios",
        id: "services",
        t: "services",
        href: ""
    },
    {
        text: "Portfolio",
        id: "portfolio",
        t: "portfolio",
        href: ""
    },
    {
        text: "Contacto",
        id: "contact-me",
        t: "contact",
        href: ""
    },
    {
        text: "Blog",
        id: "blog",
        t: "blog",
        href: "https://blog.miguelo.dev"
    }
]

export const handleMenuScroll = (id: string) => {
    scroller.scrollTo(id, {
        duration: 750,
        delay: 100,
        smooth: true,
        offset: 0,
    })
}

export default function NavList({ className, lang }: NavListProps) {
    if (lang) i18n.changeLanguage(lang)
    //const { t, i18n } = useTranslation();
    return (
        <>
            {
                MENU_OPTIONS
                    .map((option, index) => (
                        <li key={'nav-' + index}>
                            <a onClick={(event) => { option.href ? window.open(option.href, "_self") : handleMenuScroll(option.id) }} className="block py-2 pr-4 pl-3 cursor-pointer" aria-current="page">
                                <span className={className}>{i18n.t(`navbar.routes.${option.t}`) as any}</span>
                            </a>
                        </li>
                    ))
            }
        </>
    )
};