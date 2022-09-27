import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('Rohit'),
    password: new FormControl(),
    confirmPassword: new FormControl(),

    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalcode: new FormControl('')
    })
  });

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Pranav',
      password: 'test',
      confirmPassword: 'test',

      address:{
        city: 'chincholi',
        state: 'maharashtra',
        postalcode: '411037'
      }
      
    });
  }
}
