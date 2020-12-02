import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/tenant/tenant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tenant: any = null;

  constructor(private tenantService: TenantService) {
  }

  ngOnInit(): void {
    console.log("test");
    this.tenant = this.tenantService.getTenant();
    console.log(this.tenant);
    if (this.tenant == null) {
      this.tenant = 'vazio';
    }
  }

}
