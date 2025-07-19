import React from "react";
import Logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

function Nav(){
        const { t, i18n } = useTranslation();
        console.log("cur" + i18n.language);
      const changeLanguage = (lng: 'en' | 'fr' | 'ar') => {
        i18n.changeLanguage(lng);
        document.body.dir  = lng === 'ar'? 'rtl' : 'ltr';
      };
      
    const navbar: string[] = ['Menu', 'Events', 'Gallery', 'About', 'Contact'];
    const lang: {code: string, label: string}[] = [
        {code: 'en', label: 'EN'},
        {code: 'fr', label: 'FR'},
        {code: 'ar', label: 'AR'}
    ]
    return(
        <section className="flex items-center bg-transparent justify-center gap-45 mt-1" id="bgNav">
            <div className="flex justify-center items-center gap-1  hover:cursor-pointer">
                <img src={Logo} alt="logo" className="w-16 h-18"/>
                <span className="font-semibold text-2xl">restaurant</span>
            </div>
            <div className="flex gap-10">
                {navbar.map((n,i) =>(<li key={i} className="list-none hover:text-[#D96F32] hover:cursor-pointer font-medium">{t(n)}</li>))}
            </div>
            <div className="flex gap-10">
                <button className="bg-[#D96F32] p-2 rounded-md text-white font-semibold  hover:cursor-pointer">{t('BookTable')}</button>
                 <select onChange={(e) => changeLanguage(e.target.value as 'en'|'fr'|'ar')} value={i18n.language} className="border-1 border-black  hover:cursor-pointer">
                    {lang.map((l) => (<option key={l.code} value={l.code}>{l.label}</option>) )}
                 </select>
            </div>
        </section>
    )
}
export default Nav;