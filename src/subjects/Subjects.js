import { useState } from "react";
import SubjectCard from "./SubjectCard";

import {programacion, entornos, marcas} from './data/subjectsNames'

import './subjects.css'

export default function Subjects(){

    const textProgramacion = programacion
    const textEntornosDeDesarrollo = entornos
    const textMarcas = marcas

    const [visibleTodas, setVisibleTodas] = useState(true)
    const [visibleProgramacion, setVisibleProgramacion] = useState(true)
    const [visibleEntornos, setVisibleEntornos] = useState(true)
    const [visibleMarcas, setVisibleMarcas] = useState(true)

    return (<section><h2>Asignaturas</h2>
    <div className="subjectsSelectors">
        <button className={visibleTodas ? 'active' : 'muted'} onClick={()=>{
            var status = visibleTodas;
            setVisibleTodas(!status);
            setVisibleProgramacion(!status);
            setVisibleEntornos(!status);
            setVisibleMarcas(!status);
        }}>TODAS</button>
        <button className={visibleTodas || visibleProgramacion ? 'active' : 'muted'} onClick={()=>{
            setVisibleTodas(false);
            setVisibleProgramacion(!visibleProgramacion)
        }}>{textProgramacion}</button>
        <button className={visibleTodas || visibleEntornos ? 'active' : 'muted'} onClick={()=>{
            setVisibleTodas(false);
            setVisibleEntornos(!visibleEntornos)
        }}>{textEntornosDeDesarrollo}</button>
        <button className={visibleTodas || visibleMarcas ? 'active' : 'muted'} onClick={()=>{
            setVisibleTodas(false);
            setVisibleMarcas(!visibleMarcas)
        }}>{textMarcas}</button>
    </div>
    <div>
        {visibleProgramacion && <SubjectCard subject={textProgramacion} ciclo="DAW/DAM"/>}
        {visibleEntornos && <SubjectCard subject={textEntornosDeDesarrollo} ciclo="DAW/DAM"/>}
        {visibleMarcas && <SubjectCard subject={textMarcas} ciclo="DAW/DAM/ASIR"/>}
    </div>
    </section>)
}