import { Component, OnInit } from '@angular/core';

export interface Student{
  idNumber: string;
  name: string;
  dateAdded: Date;
  course: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  students=[{value:'John Uno'},
            {value:'Ana Nen'},
            {value:'Zayn Malik'}]
  students1='Elizabeth';

  student: Student = {
    idNumber: '20189522',
    name: 'Jhazel',
    dateAdded: new Date(2022, 1, 18),
    course: 'BSIT',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
