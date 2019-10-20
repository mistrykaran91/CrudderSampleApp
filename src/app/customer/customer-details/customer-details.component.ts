import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  pageTitle = "Customer Details";
  customer: Customer;

  constructor(
    private readonly customerService: CustomerService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCustomer(params.id);
    });
  }

  getCustomer(customerId: string): void {
    this.customerService.getCustomer(customerId)
      .subscribe(customer => this.customer = customer);
  }

  onCancelClick(): void {
    // Navigate to the page you want.
    // this.router.navigate(['']);
    this.location.back();
  }

  onEditClick(): void {
    const customerId = this.customer.customerId;
    this.router.navigate([`customer/edit/${customerId}`]);
  }

  onDeleteClick(): void {
    const customerId = this.customer.customerId;

    if (confirm('Are you sure you want to delete customer ?')) {
      this.customerService.deleteCustomer(customerId)
        .subscribe((response) => {
          // show some confirmation message in real world app
          console.log(response);
          // Navigate to the page you want.
          // this.router.navigate(['']);
        });
    }

  }
}
