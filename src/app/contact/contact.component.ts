import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
  }
  contact=new Contact();//code to create object from Contact class
  contactform=new FormGroup({
    firstname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-zA-Z]*$")]),
    lastname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z]*$")]),
    
    phone:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl(null,[Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$")]),
  });
  submit()
  {
    //this code is written to get data from control object and set it into contact object
    this.contact.firstname=this.contactform.controls['firstname'].value;
    this.contact.lastname=this.contactform.controls['lastname'].value;
    this.contact.phone=this.contactform.controls['phone'].value;
    this.contact.email=this.contactform.controls['email'].value;
    this.contact.password=this.contactform.controls['password'].value;
    console.log(this.contact);
  }

}