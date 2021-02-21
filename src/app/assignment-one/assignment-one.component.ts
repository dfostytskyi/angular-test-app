import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: [ './assignment-one.component.css' ]
})
export class AssignmentOneComponent implements OnInit {
  assignmentCreationStatus = '';
  assignmentCreated = false;
  assignments = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  createAssignment(): void {
    this.assignmentCreationStatus = 'Assignments was created!';
    this.assignmentCreated = true;
    this.assignments.push(`Assignment ${this.assignments.length + 1} was created!`);
  }

}
