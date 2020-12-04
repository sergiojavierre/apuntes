
import Repository from './Repository'
import './subject.css'

import{programacion, entornos, marcas} from './data/subjectsNames'
import{linksProgramacion, linksEntornos, linksMarcas} from './data/subjectsContents'

export default function SubjectCard({subject, ciclo}){

    return (
        <div >
            <div className="subject">
                <h3>{subject}</h3>
                <h5>{ciclo}</h5>
            </div>
                { subject === programacion && linksProgramacion.map(repo => {
                    return <Repository key={repo.link} repository={repo} />
                })}
                {
                    subject === entornos && linksEntornos.map(repo => {
                    return <Repository key={repo.link} repository={repo} />
                })}
                {
                    subject === marcas && linksMarcas.map(repo => {
                    return <Repository key={repo.link} repository={repo} />
                })}
        </div>)
}