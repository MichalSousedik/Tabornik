import {Component, Input, OnInit} from '@angular/core';
import {Camp} from '../../model/camp';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  camp: Camp;

  constructor(private campService: CampService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCamp();
  }

  private getCamp() {
    const id = this.route.snapshot.paramMap.get('id');
    this.campService.getCamp(+id).subscribe(camp => {
      this.camp = camp;
    });
  }


}
