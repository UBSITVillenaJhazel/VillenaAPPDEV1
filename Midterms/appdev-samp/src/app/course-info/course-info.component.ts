import { Component, OnInit } from '@angular/core';

export interface Student{
  idNumber: string;
  name: string;
  dateAdded: Date;
  course: string;
}

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  instructor='Erna-Kristi Martinez';
  courseCode='APPDEV1';
  courseDesc='Introduction to Application Development';
  serverStatus: string='offline';
  isDiabled=true;

  getServerStatus(){
    return this.serverStatus;
  }

  students=[{value:'John Uno'},
            {value:'Ana Nen'},
            {value:'Zayn Malik'}]
  //students='Elizabeth';

  student: Student = {
    idNumber: '20189522',
    name: 'Jhazel',
    dateAdded: new Date(2022, 1, 18),
    course: 'BSIT',
  };

  student1: Student = {
    idNumber: '20199522',
    name: 'Luffy',
    dateAdded: new Date(2021, 1, 18),
    course: 'BSCS',
  };

  student2: Student = {
    idNumber: '20219522',
    name: 'Zoro',
    dateAdded: new Date(2018, 1, 18),
    course: 'BSCpE',
  };


  constructor() { }

  ngOnInit(): void {
  }

}
