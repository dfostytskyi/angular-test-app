import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {

  id = 10;
  status = 'active';

  getServerStatus(): string {
    return this.status;
  }

}
