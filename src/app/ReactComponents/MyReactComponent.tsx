import * as React from "react";
import MyReactForm from './MyReactForm';

// Aufbau Funktionale Komponente mit Überschrift und integrierter Klassenkomponente
const MyReactComponent = () =>{
    return (
        <div id="hello">
            <h1 className="Ureact"> <u>React Formular nativ Wrapper</u></h1>
            <MyReactForm></MyReactForm>
        </div>
    )
}

export default MyReactComponent;