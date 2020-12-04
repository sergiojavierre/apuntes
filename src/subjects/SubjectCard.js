
import Repository from './Repository'
import './subject.css'

import{linksProgramacion, linksEntornos} from './data/subjectsContents'

export default function SubjectCard({subject, ciclo}){

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