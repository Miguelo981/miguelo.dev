import { handleMenuScroll } from "../Lists/NavList";

export default function DownArrow() {
    return (
		<img loading="lazy" src="/assets/img/icons/white-down-arrow.svg" onClick={() => handleMenuScroll('about-me')} className="animate-bounce cursor-pointer text-2.5xl mr-auto ml-auto mt-12" />
    )
}