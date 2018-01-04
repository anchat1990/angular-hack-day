import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Thing } from '../thing'
import { THINGS } from '../mock-things'

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThingsComponent implements OnInit {
  things = THINGS;
  selectedThing: Thing;
  constructor() { }

  ngOnInit() {
  }

  onSelect(thing: Thing): void {
    this.selectedThing = thing;
  }

}
