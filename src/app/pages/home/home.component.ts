import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from 'src/app/tenant/tenant.service';
import {PlatformLocation } from '@angular/common';
import { SampleService } from 'src/app/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tenant: any = null;

  constructor(
    private tenantService: TenantService, 
    private router: Router, 
    platformLocation: PlatformLocation,
    private simpleService: SampleService) {
    console.log((platformLocation as any).location);
    console.log((platformLocation as any).location.href);
    console.log((platformLocation as any).location.origin);
  }

  ngOnInit(): void {
    console.log("url home", this.router.url)
    console.log("home", location.hostname);
    this.tenant = this.tenantService.getTenant();
    console.log(this.tenant);

    setTimeout(() => {

      console.log("settimeout", window.location)
    })
    if (this.tenant == null) {
      this.tenant = 'vazio';
    }

    console.log("sample service", this.simpleService.getHostname())
  }

  ngAfterViewChecked() {
    console.log("App after view checked "+ this.router.url);
  }

}
