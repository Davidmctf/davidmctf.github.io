import { Component } from '@angular/core';

@Component({
  selector: 'app-sfd',
  templateUrl: './sfd.component.html',
  styleUrl: './sfd.component.css',
})
export class SfdComponent {
  readonly agentExampleText: string =
    'Here you can find all the information related to the SFD project. Agent@name[example.com]{}';
}
