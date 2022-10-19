import { Component, OnInit } from '@angular/core';
import { CreatecarsService } from './createcars.service';

@Component({
  selector: 'app-createcars',
  templateUrl: './createcars.component.html',
  styleUrls: ['./createcars.component.scss'],
})

export class CreatecarsComponent implements OnInit {
    public carsentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        carid: '',
        model: '',
    }

    constructor (
        private createcarsService: CreatecarsService,
    ) { }

    ngOnInit() {
        this.carsentity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createcarsService.GpCreate(this.carsentity).subscribe((data:any) => {
            this.carsentity.name = ''
 	 	this.carsentity.carid = ''
 	 	this.carsentity.model = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}