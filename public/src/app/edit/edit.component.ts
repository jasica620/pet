import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  pet: any;
  // editedPet: any;

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.bringInfo();
  }
  bringInfo(){
    let observable = this._taskService.showPet(this.id);
    observable.subscribe(res => {
      this.pet = res['data'];
      console.log("show", res)
    })
  }
  editPet(){
    let Obs = this._taskService.editPet(this.id, this.pet);
    Obs.subscribe(res => {
      this._router.navigate(['/pets']);
    })
  }
}
