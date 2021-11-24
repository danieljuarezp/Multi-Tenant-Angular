import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from 'src/app/tenant/tenant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tenant: any = null;

  constructor(private tenantService: TenantService, private router: Router) {

  }

  ngOnInit(): void {
    console.log("url home", this.router.url)
    console.log("home", location.hostname);
    this.tenant = this.tenantService.getTenant();
    console.log(this.tenant);
    if (this.tenant == null) {
      this.tenant = 'vazio';
    }
  }

}
