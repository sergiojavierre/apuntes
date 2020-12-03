
import Repository from './Repository'
import './subject.css'

export default function SubjectCard({subject, ciclo}){


    const urlGitHub = "https://github.com/sergiojavierre/"
    //{"name":"", "link": ""}
    const linksProgramacion =  [{"name":"Introducción a TypeScript", "link": urlGitHub+"introTypeScript"},{"name":"E/S en TypeScript", "link": urlGitHub+"ESTypeScript"},{"name":"Maquetación por consola", "link": urlGitHub+"partidosPrimeraTypeScript"}]
    const linksEntornos = [{"name":"Uso básico de POO", "link": urlGitHub+"clasesTypeScript"}]
    return (
        <div>
            <div className="subject">
                <h3>{subject}</h3>
                <h5>{ciclo}</h5>
            </div>
                { subject === "Programación" && linksProgramacion.map(repo => {
                    return <Repository repository={repo} />
                })}
                {
                    subject === "Entornos de desarrollo" && linksEntornos.map(repo => {
                    return <Repository repository={repo} />
                })}
        </div>)
}