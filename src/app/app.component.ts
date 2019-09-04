import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  text = '';

  listOfTasks: Array<{task: any, date: any}> = [];

  OnInput(e) {
    console.log(e.target.value);
    this.listOfTasks.push({
      task: e.target.value,
      date: new Date()
    });
    this.text = null;
  }

  addProp(e) {
    if (e.target.checked) {
       (e.target.nextElementSibling as HTMLElement).style.textDecoration = 'line-through';
       (e.target.nextElementSibling.children[0] as HTMLElement).style.textDecoration = 'line-through';
    } else {
      (e.target.nextElementSibling as HTMLElement).style.textDecoration = 'none';
      (e.target.nextElementSibling.children[0] as HTMLElement).style.textDecoration = 'none';
    }
  }


}
