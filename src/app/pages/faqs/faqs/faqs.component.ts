import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  @Input() deltaState:string ='./assets/images/DeltaState.png';

  constructor() { }

  ngOnInit(): void {
  }

}
