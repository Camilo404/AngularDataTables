import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-angulardatatable',
  templateUrl: './angulardatatable.component.html',
  styleUrls: ['./angulardatatable.component.css']
})
export class AngulardatatableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((res: any) => {
        this.data = res.data;

        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
