import { resources } from "../config/i18n.config";
import { useState } from "react";
import { ReactSVG } from "react-svg";

export default function LanguagePicker() {
    const [show, setShow] = useState(false);

    const changeLang = (lang: string) => {
        window.location.replace(`http://${window.location.host}/${lang}`);
    }

    return (
        <li className="relative">
            <ReactSVG  src={`/assets/img/icons/translate.svg`} className="w-6 h-auto fill-current mt-2 text-white hover:text-blue-500 cursor-pointer" onClick={() => setShow(!show)} />
            {
                show ?
                <div className="bg-white rounded-lg mt-2 -left-3 absolute">
                    {
                        Object.keys(resources)
                            .map((lang, index) => (
                                <div key={"lang-"+index} className="uppercase text-black hover:text-blue-500 p-4 font-bold cursor-pointer" onClick={() => { changeLang(lang); setShow(false); }}>
                                    { lang }
                                </div>
                            ))
                    }
                </div>
                :
                null
            }
        </li>
    )
};