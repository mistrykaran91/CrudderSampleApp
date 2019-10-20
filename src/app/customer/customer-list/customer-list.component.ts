import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[];
  public pageTitle = 'Customer List';

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  onAddClick() {
    this.router.navigate(['customer/create']);
  }

  onDeleteClick(customer: Customer) {
    const customerId = customer.customerId;
    if (confirm('Are you sure you want to delete customer ?')) {
      this.customerService.deleteCustomer(customerId).subscribe((response) => {
        console.log(response);
      })
    }
  }

}
