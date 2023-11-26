import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JuegoInterface } from 'src/app/services/juego.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() mensaje: string = '';
  @Input() data!:JuegoInterface[];
  @Input() totalSold!:number;
  @Input() importe:string ='';
  ngOnInit(){
    console.log("object");
    
  }

}
