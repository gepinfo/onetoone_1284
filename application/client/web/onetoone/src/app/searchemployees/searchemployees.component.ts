import { Component, OnInit } from '@angular/core';
import { SearchemployeesService } from './searchemployees.service';

@Component({
  selector: 'app-searchemployees',
  templateUrl: './searchemployees.component.html',
  styleUrls: ['./searchemployees.component.scss'],
})

export class SearchemployeesComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Employee name', field: 'name'  },{ headerName: 'Designation', field: 'designation'  },{ headerName: 'Employee ID', field: 'employeeid'  },{ headerName: 'Car ID', field: 'carid'  },];
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
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchemployeesService: SearchemployeesService,
    ) { }

    ngOnInit() {
        this.employeesentity.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpSearchRelationship() {
        this.searchemployeesService.GpSearchRelationship(this.employeesentity).subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.searchemployeesService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}