import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './subject.css'

export default function Repository({repository}){
    const icon = <FontAwesomeIcon icon = {faExternalLinkAlt} />
    return <div className="repository"><p>{repository.name}</p><a href={repository.link}>{icon}</a></div>
}