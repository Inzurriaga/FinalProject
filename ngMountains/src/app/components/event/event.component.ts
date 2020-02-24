import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private eventSrv: EventService) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.paramMap.get("id");
    this.getEventDetails(id);
  }
  getEventDetails(id) {
    this.eventSrv.show(id).subscribe(
      data=> console.log(data),
      err=> console.log(err)
    )
  }

}
