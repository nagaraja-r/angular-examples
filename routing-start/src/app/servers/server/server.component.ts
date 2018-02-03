import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

  onReload(){
    // relativeTo --> will consider the current active route and look for -->servers/servers
   // this.router.navigate(['servers'], {relativeTo : this.activatedRoute});

  }

}
