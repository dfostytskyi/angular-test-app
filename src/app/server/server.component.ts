import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})

export class ServerComponent {
  id = 10;
  status = 'active';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'online' ? 'green' : 'red';
  }

}
