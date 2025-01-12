import { Component, OnInit, Input, } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { UserRegistrationService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  standalone: false,
  
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.css'
})
export class UserRegistrationFormComponent {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  // @param fetchApiData
  // @param dialogRef
  // @param snackBar

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      this.snackBar.open('User registered successfully!', 'OK', {
        duration: 2000
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}

