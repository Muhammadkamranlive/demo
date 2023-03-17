import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Nozle } from 'src/app/Models/Nozle';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.css']
})
export class MeterReadingComponent implements OnInit {
  
  todayreading:Nozle=new Nozle();
  yesterdayreading:Nozle= new Nozle();
  isloading:boolean=false;
  todaymetersaled1!:number;
  todaymetersaled2!:number;
  todaymetersalep3!:number;
  todaymetersalep4!:number;
  todaymetersalep5!:number;
  todaymetersalep6!:number;
  todaymetersalepriced1!:number;
  todaymetersalepriced2!:number;
  TodayMeterSalePriceP3!:number;
  TodayMeterSalePriceP4!:number;
  TodayMeterSalePriceP5!:number;
  TodayMeterSalePriceP6!:number;
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
  
  GetTodayMeterReading(form:FormGroup) {
    this.isloading=true;
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.openingDate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       if(response!==null){
       this.todayreading=response
       this.myForm.controls.d11.setValue(this.todayreading.d1);
       this.myForm.controls.d21.setValue(this.todayreading.d2);
       this.myForm.controls.p31.setValue(this.todayreading.p3);
       this.myForm.controls.p41.setValue(this.todayreading.p4);
       this.myForm.controls.p51.setValue(this.todayreading.p5);
       this.myForm.controls.p61.setValue(this.todayreading.p6);
       this.myForm.controls.openingDate.setValue(this.todayreading.date);
       this.myForm.controls.readingNo.setValue(this.todayreading.readingNo);
       this.GetYesterdayMeterReading(form);
       this.isloading=false;
       }
       else{
        this.GetYesterdayMeterReading(form);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "No Today Reading Found",
          footer: 'Please try later'
        })
        this.myForm.controls.d11.setValue(0);
        this.myForm.controls.d21.setValue(0);
        this.myForm.controls.p31.setValue(0);
        this.myForm.controls.p41.setValue(0);
        this.myForm.controls.p51.setValue(0);
        this.myForm.controls.p61.setValue(0);
        this.myForm.controls.openingDate.setValue('');
        this.myForm.controls.readingNo.setValue(0);
        this.isloading=false;
       }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Please try later'
        })
        this.myForm.controls.d11.setValue(0);
        this.myForm.controls.d21.setValue(0);
        this.myForm.controls.p31.setValue(0);
        this.myForm.controls.p41.setValue(0);
        this.myForm.controls.p51.setValue(0);
        this.myForm.controls.p61.setValue(0);
        this.myForm.controls.openingDate.setValue('');
        this.myForm.controls.readingNo.setValue(0);
        this.isloading=false;
      }
    );
  }
  
  GetYesterdayMeterReading(form:any) {
    this.isloading=true;
    this.myForm.controls['closingdate'].setValue(this.formatDate(this.getPreviousDay(new Date(form.value.openingDate))));
    this.service.getAll(`https://localhost:7088/api/Nozle/getReading?date=${form.value.closingdate}&reading=${form.value.readingNo}`).subscribe(
      (response) => {
       if(response!==null){
       this.yesterdayreading=response
       this.myForm.controls.d1.setValue(this.yesterdayreading.d1);
       this.myForm.controls.d2.setValue(this.yesterdayreading.d2);
       this.myForm.controls.p3.setValue(this.yesterdayreading.p3);
       this.myForm.controls.p4.setValue(this.yesterdayreading.p4);
       this.myForm.controls.p5.setValue(this.yesterdayreading.p5);
       this.myForm.controls.p6.setValue(this.yesterdayreading.p6);
       this.myForm.controls.closingdate.setValue(this.yesterdayreading.date);
       this.myForm.controls.readingNo.setValue(this.yesterdayreading.readingNo);
       this.processValue(form);
       this.isloading=false;
       }
       else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "No Yesterday Reading Found",
          footer: 'Please try later'
        })
       this.myForm.controls.d1.setValue(0);
       this.myForm.controls.d2.setValue(0);
       this.myForm.controls.p3.setValue(0);
       this.myForm.controls.p4.setValue(0);
       this.myForm.controls.p5.setValue(0);
       this.myForm.controls.p6.setValue(0);
       this.myForm.controls.closingdate.setValue('');
       this.myForm.controls.readingNo.setValue(0);
       this.isloading=false;
       }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Please try later'
        })
        this.myForm.controls.d1.setValue(0);
        this.myForm.controls.d2.setValue(0);
        this.myForm.controls.p3.setValue(0);
        this.myForm.controls.p4.setValue(0);
        this.myForm.controls.p5.setValue(0);
        this.myForm.controls.p6.setValue(0);
        this.myForm.controls.closingdate.setValue('');
        this.myForm.controls.readingNo.setValue(0);
        this.isloading=false;
      }
    );
   
  }




  AddTodayMeterReadings(form:FormGroup){
     var nozle = new Nozle();
     nozle.date = form.value.openingDate;
     nozle.d1=form.value.d11;
     nozle.d2=form.value.d21;
     nozle.p3=form.value.p31;
     nozle.p4=form.value.p41;
     nozle.p5=form.value.p51;
     nozle.p6=form.value.p61;
     nozle.readingNo=form.value.readingNo;
     this.service.create(nozle).subscribe(
      (response) => {
      Swal.fire(
        'Reading Added Successfully!',
        'You have added Reading!',
        'success'
      )
  
      },
      (err) => {
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
              footer: 'Please try later'
            })
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
           
           this.todaymetersaled1=form.value.d11-form.value.d1;
           this.todaymetersaled2=form.value.d21-form.value.d2;
           this.todaymetersalep3=form.value.p31-form.value.p3;
           this.todaymetersalep4=form.value.p41-form.value.p4;
           this.todaymetersalep5=form.value.p51-form.value.p5;
           this.todaymetersalep6=form.value.p61-form.value.p6;
           this.todaymetersalepriced1=this.todaymetersaled1*280;
           this.todaymetersalepriced2=this.todaymetersaled2*280;
           this.TodayMeterSalePriceP3=this.todaymetersalep3*272;
           this.TodayMeterSalePriceP4=this.todaymetersalep4*272;
           this.TodayMeterSalePriceP5=this.todaymetersalep5*272;
           this.TodayMeterSalePriceP6=this.todaymetersalep6*272;
          
  }

  public generatePDF(): void {
   this.isloading=true;
   const doc = new jsPDF()
   autoTable(doc, { html: '#table1' })
   autoTable(doc, { html: '#table' })
   autoTable(doc, { html: '#table2' })

   doc.save('table.pdf');
   this.isloading=false;
  }

 


}
