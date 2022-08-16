import * as React from 'react';
import { WrapperService } from '../wrapper-service.service';

class MyReactForm extends React.Component {
    // Konstruktor muster
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        let framework = "react";
        console.log("submitted React");
        WrapperService.getInputValues(framework);
    }

    override render(): React.ReactNode {
        return (
            // HTML Aufbau für das Form
            <div className='center'>
                <form className="Ureact" onSubmit={this.handleSubmit}>
                    <div className='formDiv'>
                        <label htmlFor="text">Text</label>
                        <input
                            type={"text"}
                            name="text"
                            id="text"
                            className='formInput'
                            defaultValue={""}
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="number">Nummer</label>
                        <input
                            type={"number"}
                            name="number"
                            id='number'
                            className='formInput'
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="date">Datum</label>
                        <input
                            type={"date"}
                            name="date"
                            id='date'
                            className='formInput'
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <button className='submitButton'>Absenden</button>
                    </div>
                </form>
            </div>
        )
    }   
}  
// export default um Komponente anderswo zu nutzen
export default MyReactForm