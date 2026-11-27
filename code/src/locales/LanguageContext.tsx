import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {ptBr,type Dictionary} from './PtBr';
import {enUs} from './EnUs';
export type Language='pt-BR'|'en-US';
export const languages=[{id:'pt-BR',label:'Português (Brasil)',short:'PT-BR'},{id:'en-US',label:'English (United States)',short:'EN-US'}] as const;
export const preferenceKey='lcr-academic-language';
const dictionaries:Record<Language,Dictionary>={'pt-BR':ptBr,'en-US':enUs};
function initialLanguage():Language{try{const v=localStorage.getItem(preferenceKey);return v==='en-US'?'en-US':'pt-BR'}catch{return 'pt-BR'}}
const LanguageContext=createContext<{language:Language;setLanguage:(value:Language)=>void;t:Dictionary}|null>(null);
export function LanguageProvider({children}:{children:ReactNode}){const [language,setLanguage]=useState<Language>(initialLanguage);const t=dictionaries[language];useEffect(()=>{document.documentElement.lang=language;document.querySelector('meta[name="description"]')?.setAttribute('content',t.meta);try{localStorage.setItem(preferenceKey,language)}catch{/* preference is optional */}},[language,t]);return <LanguageContext.Provider value={{language,setLanguage,t}}>{children}</LanguageContext.Provider>}
export function useLanguage(){const value=useContext(LanguageContext);if(!value)throw new Error('LanguageProvider required');return value}
export function formatNumber(value:number,language:Language,minimumIntegerDigits=1){return new Intl.NumberFormat(language,{minimumIntegerDigits,useGrouping:minimumIntegerDigits===1}).format(value)}
