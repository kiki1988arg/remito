import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  group: FormGroup;


  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];
  todo = [

    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' }

  ];
  done = [
    [
      { title: 'Get to work' },
      { title: 'Pick up groceries' },
      { title: 'Go home' },
      { title: 'Fall asleep' }
    ],
    [
      { title: 'Get up' },
      { title: 'Brush teeth' },
      { title: 'Take a shower' },
      { title: 'Check e-mail' },
      { title: 'Walk dog' }
    ],
    [
      { title: 'Get to work' },
      { title: 'Pick up groceries' },
      { title: 'Go home' },
      { title: 'Fall asleep' }
    ]
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.group = this.fb.group({
      phones: this.fb.array([])
    });
    // this.createItem();
  }

  drop(event: CdkDragDrop<any[]>, pos: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  pass() {
    this.todo.length = 0;
  }
}
