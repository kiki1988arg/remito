import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { GlobalFormService } from '@shared/services/global-form.service';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  globalForm: GlobalForm;

  todo = [

    { title: '1', aux: 'jeje' },
    { title: '2', aux: 'jeje' },
    { title: '3', aux: 'jeje' },
    { title: '4', aux: 'jeje' }

  ];
  // this.globalForm.bultazos = [
  //   [
  //     { title: 'Get to work', aux: 'jeje' },
  //     { title: 'Pick up groceries', aux: 'jeje' },
  //     { title: 'Go home', aux: 'jeje' },
  //     { title: 'Fall asleep', aux: 'jeje' }
  //   ],
  //   [
  //     { title: 'Get up', aux: 'jeje' },
  //     { title: 'Brush teeth', aux: 'jeje' },
  //     { title: 'Take a shower', aux: 'jeje' },
  //     { title: 'Check e-mail', aux: 'jeje' },
  //     { title: 'Walk dog', aux: 'jeje' }
  //   ],
  //   [
  //     { title: 'Get to work', aux: 'jeje' },
  //     { title: 'Pick up groceries', aux: 'jeje' },
  //     { title: 'Go home', aux: 'jeje' },
  //     { title: 'Fall asleep', aux: 'jeje' }
  //   ]
  // ];


  constructor(private GFS: GlobalFormService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });
  }

  addPackage() {
    this.globalForm.Packages.push([]) ;
  }

  removePackage(i: number) {
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


