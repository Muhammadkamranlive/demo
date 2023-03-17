import { Component, Input, OnInit } from '@angular/core';
import { Nozle } from 'src/app/Models/Nozle';

@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.css']
})
export class PdfRendererComponent implements OnInit {

  constructor() { }
  @Input() todayreading!:Nozle;
  @Input() yesterdayreading!:Nozle;
  @Input() todaymetersaled1!:number;
  @Input() todaymetersaled2!:number;
  @Input() todaymetersalep3!:number;
  @Input() todaymetersalep4!:number;
  @Input() todaymetersalep5!:number;
  @Input() todaymetersalep6!:number;
  @Input() todaymetersalepriced1!:number;
  @Input() todaymetersalepriced2!:number;
  @Input() TodayMeterSalePriceP3!:number;
  @Input() TodayMeterSalePriceP4!:number;
  @Input() TodayMeterSalePriceP5!:number;
  @Input() TodayMeterSalePriceP6!:number;
  
  ngOnInit(): void {
  }

}
