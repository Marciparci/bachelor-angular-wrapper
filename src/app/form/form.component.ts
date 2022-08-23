import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WrapperService } from '../wrapper-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [WrapperService]
})

export class FormComponent {

  // Füllen des Formulars mit Ausgangswerten
  exampleForm = this.formBuilder.group({
    text: 'Formulartext nativer Wrapper',
    number: 20,
    date: '2022-08-15'
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  // Funktion löst aus, wenn der "Absenden" Button des Angular Formulars betätigt wird
  onSubmit() {
    // Aufruf des Services und der Funktion "getInputValues" 
    // mit Übergabeparameter des Namen des Frameworks
    let framework = "angular";
    WrapperService.getInputValues(framework);
  }

}
