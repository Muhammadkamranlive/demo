import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
  styleUrls: ['./header-stats.component.css']
})
export class HeaderStatsComponent implements OnInit {
  users: any[]=[];
  activeUser!:number;
  onLeave!:number;
  trainee!:number;
  juniors!:number;
  constructor(private service:UserService) { }
  ngOnInit(): void {
    
    this.service.getAll(``).subscribe((data)=>{
      this.users=data;
      this.activeUser= this.users.filter((list)=>list.status==="Active").length;
      this.onLeave= this.users.filter((list)=>list.status==="leave").length;
      this.trainee= this.users.filter((list)=>list.mobile==="trainees").length;
      this.juniors= this.users.filter((list)=>list.mobile==="juniors").length;
    })
   
  }

}
