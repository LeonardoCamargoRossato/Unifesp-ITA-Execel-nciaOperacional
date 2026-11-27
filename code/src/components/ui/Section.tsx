import type {ReactNode} from 'react';
export function PageHeading({eyebrow,title,description}:{eyebrow:string;title:string;description?:string}){return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description&&<p className="lead">{description}</p>}</header>}
export function Panel({title,children}:{title:string;children:ReactNode}){return <section className="panel"><h2>{title}</h2>{children}</section>}
export function ExternalLink({href,children}:{href:string;children:ReactNode}){return <a className="action" href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>}
