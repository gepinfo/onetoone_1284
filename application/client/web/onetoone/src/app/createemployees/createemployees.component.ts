import { Component, OnInit } from '@angular/core';
import { CreateemployeesService } from './createemployees.service';

@Component({
  selector: 'app-createemployees',
  templateUrl: './createemployees.component.html',
  styleUrls: ['./createemployees.component.scss'],
})

export class CreateemployeesComponent implements OnInit {
    public employeesentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        designation: '',
        employeeid: '',
        carid: '',
    }

    constructor (
        private createemployeesService: CreateemployeesService,
    ) { }

    ngOnInit() {
        this.employeesentity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createemployeesService.GpCreate(this.employeesentity).subscribe((data:any) => {
            this.employeesentity.name = ''
 	 	this.employeesentity.designation = ''
 	 	this.employeesentity.employeeid = ''
 	 	this.employeesentity.carid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}