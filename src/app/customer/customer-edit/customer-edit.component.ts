import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  mainForm: FormGroup;
  pageTitle = "Customer";

  customer: Customer;

  constructor(
    private readonly fb: FormBuilder,
    private readonly customerService: CustomerService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location) { }

  ngOnInit() {

    this.mainForm = this.createMainForm();
    this.activatedRoute.params.subscribe((params) => {
      if (this.isEditAction(params)) {
        this.pageTitle = `${this.pageTitle} Edit`;
        this.getCustomer(params.id);
      } else {
        this.pageTitle = `${this.pageTitle} Create`;
      }
    });
  }

  getCustomer(customerId: string): void {
    this.customerService.getCustomer(customerId)
      .subscribe(customer => {
        this.customer = customer;
        if (this.customer) {
          this.mainForm.patchValue(this.customer);
        }
      });
  }

  onCancelClick(): void {
    // Navigate to the page you want.
    // this.router.navigate(['']);
    this.location.back();
  }

  onSaveClick(): void {

    if (!this.isEditAction) {
      const customer = Object.assign({}, this.mainForm.value);
      this.customerService.createCustomer(customer)
        .subscribe((customer) => {
          // show some confirmation message in real world app
          console.log(customer);
          // Navigate to the page you want.
          // this.router.navigate(['']);
          this.location.back();
        });
    } else {
      const customer = Object.assign({}, this.customer, this.mainForm.value);
      this.customerService.updateCustomer(customer)
        .subscribe((customer) => {
          // show some confirmation message in real world app
          console.log(customer);
          // Navigate to the page you want.
          // this.router.navigate(['']);
          this.location.back();
        });
    }
  }

  isEditAction = (params) => !!(params && params.id && params.id !== '0');

  // region 'Form Creation'
  createMainForm(): FormGroup {
    return this.fb.group({
      customerId: ["0", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      age: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      contactDetails: this.createContactDetailsForm()
    });
  }

  createContactDetailsForm(): FormGroup {
    return this.fb.group({
      phone: [""],
      email: [""],
      address: this.createAddressForm()
    });
  }

  createAddressForm(): FormGroup {
    return this.fb.group({
      street1: [""],
      street2: [""],
      landmark: [""],
      pincode: [""]
    });
  }
  // endregion
}
