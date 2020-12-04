import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faThermometerFull } from '@fortawesome/free-solid-svg-icons'

import './subject.css'

export default function Repository({repository}){
    const icon = <FontAwesomeIcon icon = {faExternalLinkAlt} />
    const iconEasy  = <FontAwesomeIcon icon = {faThermometerQuarter} />
    const iconMedium  = <FontAwesomeIcon icon = {faThermometerHalf} />
    const iconHard  = <FontAwesomeIcon icon = {faThermometerFull} />
    return (<div className="repository">
        <div>
            <p>{ repository.hardness === 1 && iconEasy}
                { repository.hardness === 2 && iconMedium}
                { repository.hardness === 3 && iconHard}
                {" "+repository.name}</p>
            <label>{repository.description}</label>
        </div>
        <a href={repository.link}>{icon}</a>
    </div>);
}