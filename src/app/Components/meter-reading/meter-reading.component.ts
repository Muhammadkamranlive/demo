import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Nozle } from 'src/app/Models/Nozle';

import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.css']
})
export class MeterReadingComponent implements OnInit {
  
  users?:Nozle;
  user1?:Nozle;
  value1:any;
  value2:any;
  value3:any;
  value4:any;
  value5:any;
  value6:any;
  value11:any;
  value21:any;
  value31:any;
  value41:any;
  value51:any;
  value61:any;
  errorMessage: string | undefined = undefined;
  myForm = new FormGroup({
    openingDate: new FormControl(''),
    closingdate: new FormControl(''),
    readingNo: new FormControl(0),
    d1:new FormControl(0),
    d2:new FormControl(0),
    p3:new FormControl(0),
    p4:new FormControl(0),
    p5:new FormControl(0),
    p6:new FormControl(0),
    d11:new FormControl(0),
    d21:new FormControl(0),
    p31:new FormControl(0),
    p41:new FormControl(0),
    p51:new FormControl(0),
    p61:new FormControl(0),
   
  });
  constructor(private service:UserService) {
   
   }
  
  getData(form:FormGroup) {
    this.getData1(form);
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.openingDate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       this.user1=response
       this.myForm.controls.d11.setValue(this.user1!.d1);
       this.myForm.controls.d21.setValue(this.user1!.d2);
       this.myForm.controls.p31.setValue(this.user1!.p3);
       this.myForm.controls.p41.setValue(this.user1!.p4);
       this.myForm.controls.p51.setValue(this.user1!.p5);
       this.myForm.controls.p61.setValue(this.user1!.p6);
       this.user1!.date=form.value.openingDate;
       this.user1!.readingNo=form.value.readingNo;
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

 

  
  getData1(form:any) {
    this.myForm.controls['closingdate'].setValue(this.formatDate(this.getPreviousDay(new Date(form.value.openingDate))));
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.closingdate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       
       this.users=response
       this.myForm.controls.d1.setValue(this.users!.d1);
       this.myForm.controls.d2.setValue(this.users!.d2);
       this.myForm.controls.p3.setValue(this.users!.p3);
       this.myForm.controls.p4.setValue(this.users!.p4);
       this.myForm.controls.p5.setValue(this.users!.p5);
       this.myForm.controls.p6.setValue(this.users!.p6);
       this.users!.date=form.value.closingdate;
       this.processValue(form);
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
   
  }


  getDataPosted(form:FormGroup) {
    this.myForm.controls['openingDate'].setValue(this.formatDate(this.getnextDay(new Date(form.value.openingDate))));
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.openingDate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       this.user1=response
       this.myForm.controls.d11.setValue(this.user1!.d1);
       this.myForm.controls.d21.setValue(this.user1!.d2);
       this.myForm.controls.p31.setValue(this.user1!.p3);
       this.myForm.controls.p41.setValue(this.user1!.p4);
       this.myForm.controls.p51.setValue(this.user1!.p5);
       this.myForm.controls.p61.setValue(this.user1!.p6);
       this.getData1(form);
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

 

  
  getData1Posted(form:any) {
    this.myForm.controls['closingdate'].setValue(this.formatDate(this.getPreviousDay(new Date(form.value.openingDate))));
   
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.closingdate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       
       this.users=response
       this.myForm.controls.d1.setValue(this.users!.d1);
       this.myForm.controls.d2.setValue(this.users!.d2);
       this.myForm.controls.p3.setValue(this.users!.p3);
       this.myForm.controls.p4.setValue(this.users!.p4);
       this.myForm.controls.p5.setValue(this.users!.p5);
       this.myForm.controls.p6.setValue(this.users!.p6);
       console.log(this.user1)
       this.processValue(form);
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
   
  }
  add(form:FormGroup){
     this.users!.date=form.value.openingDate;
     this.users!.d1=form.value.d11;
     this.users!.d2=form.value.d21;
     this.users!.p3=form.value.p31;
     this.users!.p4=form.value.p41;
     this.users!.p5=form.value.p51;
     this.users!.p6=form.value.p61;
     this.users!.readingNo=form.value.readingNo;
     this.service.create(this.users).subscribe(
      (response) => {
      alert("Reading Added Successfully")
    
      
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
  
    return previous;
  }
  
  getnextDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() +1);
  
    return previous;
  }
  padTo2Digits(num:any) {
    return num.toString().padStart(2, '0');
  }
  formatDate(date:Date) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join('-');
  }

  ngOnInit() {
   
    
  }

  processValue(form:FormGroup){
           this.value1=form.value.d11-form.value.d1;
           this.value2=form.value.d21-form.value.d2;
           this.value3=form.value.p31-form.value.p3;
           this.value4=form.value.p41-form.value.p4;
           this.value5=form.value.p51-form.value.p5;
           this.value6=form.value.p61-form.value.p6;
           
           this.value11=this.value1*280;
           this.value21=this.value2*280;
           this.value31=this.value3*272;
           this.value41=this.value4*272;
           this.value51=this.value5*272;
           this.value61=this.value6*272;
          
  }

  public generatePDF(): void {

   const doc = new jsPDF()
   autoTable(doc, { html: '#table1' })
   autoTable(doc, { html: '#table' })
   autoTable(doc, { html: '#table2' })

   doc.save('table.pdf')
  }
  onSubmit(form:FormGroup) {
    console.log(form.value.openingDate)
  }


}
