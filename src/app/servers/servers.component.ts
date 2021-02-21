import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [ './servers.component.css' ]
})
export class ServersComponent implements OnInit {
  disableNewServer = false;
  serverCreationStatus = 'No servers created yet';
  serverName = 'Kek';
  personName = '';
  serverCreated = false;
  servers = [ 'Testserver', 'Testserver 2' ];

  constructor() {
    setTimeout(() => {
      this.disableNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' server was created';
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }

  onInputClear(): void {
    this.personName = '';
  }
}
