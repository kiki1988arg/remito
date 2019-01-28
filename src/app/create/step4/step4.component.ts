import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { GlobalFormService } from '@shared/services/global-form.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  fgroup: FormGroup;

  todo = [

    { title: '1', aux: 'jeje' },
    { title: '2', aux: 'jeje' },
    { title: '3', aux: 'jeje' },
    { title: '4', aux: 'jeje' }

  ];
  done = [
    [
      { title: 'Get to work', aux: 'jeje' },
      { title: 'Pick up groceries', aux: 'jeje' },
      { title: 'Go home', aux: 'jeje' },
      { title: 'Fall asleep', aux: 'jeje' }
    ],
    [
      { title: 'Get up', aux: 'jeje' },
      { title: 'Brush teeth', aux: 'jeje' },
      { title: 'Take a shower', aux: 'jeje' },
      { title: 'Check e-mail', aux: 'jeje' },
      { title: 'Walk dog', aux: 'jeje' }
    ],
    [
      { title: 'Get to work', aux: 'jeje' },
      { title: 'Pick up groceries', aux: 'jeje' },
      { title: 'Go home', aux: 'jeje' },
      { title: 'Fall asleep', aux: 'jeje' }
    ]
  ];


  constructor(private GFS: GlobalFormService,
    private fb: FormBuilder) {
    this.GFS.value.subscribe(
      e => {
        e.packages = this.done;
      });
  }



  ngOnInit() {

  }

  addPackage() {
    this.done.push([]);
    // add address to the list
    // this.Packages.push(this.initPackage());
  }

  removePackage(i: number) {
    // remove address from the list
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}


