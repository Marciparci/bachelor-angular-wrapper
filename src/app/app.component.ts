import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as React from 'react';
import MyReactComponent from './ReactComponents/MyReactComponent';
import * as ReactDOMClient from 'react-dom/client'
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  inputs: any = [];
  title = 'bachelor-angular';

  public rootId = 'rootId';

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.render();
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);

      // umlagern in Array um leichter an Eigenschaften zu kommen
      this.inputs = data;

      // Zuweisen JSON Wert zu Input Wert Text
      const text = (<HTMLInputElement>document.getElementById("text"));
      text.value = this.inputs.text;

      // Zuweisen JSON Wert zu Input Wert Nummer
      const number = (<HTMLInputElement>document.getElementById("number"));
      number.value = this.inputs.number;

      // Zuweisen JSON Wert zu Input Wert Datum
      const date = (<HTMLInputElement>document.getElementById("date"));
      date.value = this.inputs.date;
    })
   
  }
  
  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  private render(){
    const container = document.getElementById(this.rootId);
    const root = ReactDOMClient.createRoot(container!); //Ausrufezeichen wegen TypeScript
    root.render(React.createElement(MyReactComponent)); //nur einmal möglich, es wird immer das letzte geladen
  }

}
