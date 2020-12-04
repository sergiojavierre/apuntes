
import './recomendations.css'

export default function Recomendations () {
    return(
        <div>
            <div className="recomendations">
                <section className="recomendation">
                    <h3>Entornos de desarrollo</h3>
                    <ul>
                        <li><a href="https://code.visualstudio.com/download">Visual Studio Code</a></li>
                        <li><a href="https://www.jetbrains.com/es-es/idea/download/">IntelliJ Idea Community</a></li>
                    </ul>
                </section>
                <section className="recomendation">
                    <h3>Hosting gratuito</h3>
                    <ul>
                        <li><a href="https://www.heroku.com">HEROKU</a></li>
                        <li><a href="https://vercel.com/">vercel</a></li>
                        <li><a href="https://www.netlify.com">netlify</a></li>
                    </ul>
                </section>
                <section className="recomendation">
                    <h3>Recursos HTML + CSS</h3>
                    <ul>
                        <li><a href="https://www.w3schools.com/html/">W3Schools HTML</a></li>
                        <li><a href="https://www.w3schools.com/css/default.asp">W3Schools CSS</a></li>
                        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Guía flexbox</a></li>
                        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Guía grid</a></li>
                    </ul>
                </section>
                <section className="recomendation">
                    <h3>Frameworks CSS</h3>
                    <ul>
                        <li><a href="https://getbootstrap.com">Bootstrap</a></li>
                        <li><a href="https://get.foundation">Foundation</a></li>
                        <li><a href="https://tailwindcss.com">Tailwind</a></li>
                    </ul>
                </section>
                <section className="recomendation">
                    <h3>Repositorios de código fuente</h3>
                    <ul>
                        <li><a href="https://github.com">GitHub</a></li>
                        <li><a href="https://bitbucket.com">Bitbucket</a></li>
                    </ul>
                </section>
                <section className="recomendation">
                    <h3>Bases de datos</h3>
                    <ul>
                        <li><a href="https://diagrams.net">Herramienta para diseño de E/R y modelo relacional</a></li>
                        <li><a href="https://mariadb.com">MariaDB (relacional)</a></li>
                        <li><a href="https://postgresql.com">PostgreSQL (relacional)</a></li>
                        <li><a href="https://postgresql.com">MongoDB (documental)</a></li>
                    </ul>
                </section>
            </div>
            <section className="recomendation">
                <h3>Canales de YouTube</h3>
                <ul>
                    <li><a href="https://www.youtube.com/user/azaman1984">Carlos Azaustre (backend y frontend)</a></li>
                    <li><a href="https://www.youtube.com/channel/UC8LeXCWOalN8SxlrPcG-PaQ">midudev (frontend)</a></li>
                    <li><a href="https://www.youtube.com/channel/UCrBzBOMcUVV8ryyAU_c6P5g">Pelado Nerd (devops)</a></li>
                    <li><a href="https://www.youtube.com/channel/UCSf6S_PAhXsqGMTPDiKgdRg">BettaTech (Calidad del software)</a></li>
                    <li><a href="https://www.youtube.com/channel/UCxPD7bsocoAMq8Dj18kmGyQ">MoureDev (apps móviles)</a></li>
                    <li><a href="https://www.youtube.com/c/LuisCanary/videos">LuisCanary (Unity3D)</a></li>
                </ul>
            </section>
        </div>
    )
}