import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {User} from '../../model/user';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  position: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.position = this.data.position;
  }

}
