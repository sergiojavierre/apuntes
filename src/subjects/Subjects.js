import SubjectCard from "./SubjectCard";

export default function Subjects(){
    return (<section><h2>Asignaturas</h2>
    <div>
        <SubjectCard subject="Programación" ciclo="DAW/DAM"/>
        <SubjectCard subject="Entornos de desarrollo" ciclo="DAW/DAM"/>
        <SubjectCard subject="Lenguajes de Marcas y Sistemas de Gestión de la Información" ciclo="DAW/DAM/ASIR"/>
    </div>
    </section>)
}