import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{
  constructor(http:HttpClient) { 
    super("https://localhost:7088/api/Nozle/getReading?date=12 feb&reading=1",http)
  }
}
