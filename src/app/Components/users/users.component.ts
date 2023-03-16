import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/Services/user.service";
import { User } from "src/app/Models/User";
import { TitleStrategy } from "@angular/router";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  formvalue!: FormGroup;
  userModel: User = new User();
  users: any[] = [];
  showUpdatebutton: boolean = false;
  showAddbutton: boolean = true;
  errorMessage: string | undefined = undefined;
  id!:string;
  constructor(private formBuilder: FormBuilder, private service: UserService) {}
  getData() {
    this.service.getAll(``).subscribe(
      (response) => {
       this.users=response
       console.log(this.users)
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
  ngOnInit(): void {
    this.getData();
    this.formvalue = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      mobile: [""],
      status: [""],
    });
  }

  addUser() {
    this.userModel.firstName = this.formvalue.value.firstName;
    this.userModel.lastName = this.formvalue.value.lastName;
    this.userModel.email = this.formvalue.value.email;
    this.userModel.mobile = this.formvalue.value.mobile;
    this.userModel.status = this.formvalue.value.status;
    this.service.create(this.userModel).subscribe(
      (response) => {
        this.formvalue.reset();
        this.getData();
        alert("Your Data is added successfully");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  deleteUser(id: string) {
    this.service.delete(id).subscribe(
      (response) => {
        this.getData();
        alert("User Deleted Successfully");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
  onEdit(user: any) {
    this.showUpdatebutton = true;
    this.showAddbutton = false;
    this.formvalue.controls["firstName"].setValue(user.firstName);
    this.formvalue.controls["lastName"].setValue(user.lastName);
    this.formvalue.controls["email"].setValue(user.email);
    this.formvalue.controls["mobile"].setValue(user.mobile);
    this.formvalue.controls["status"].setValue(user.status);
    this.id=user.userid
  }

  updateUser() {
    this.userModel.firstName = this.formvalue.value.firstName;
    this.userModel.lastName = this.formvalue.value.lastName;
    this.userModel.email = this.formvalue.value.email;
    this.userModel.mobile = this.formvalue.value.mobile;
    this.userModel.status = this.formvalue.value.status;
    console.log(this.id);
    this.service.update(this.userModel,this.id).subscribe(
      (response) => {
        this.getData();
        alert("User Details Updated Successfully");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
}
