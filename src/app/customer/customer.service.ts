import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'api/customers/customers.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {

    return of(customers);
    // return this.http.get<Customer[]>(this.customerUrl)
    //   .pipe(
    //     tap(customers => console.log(`Customers ${JSON.stringify(customers)}`)),
    //     catchError(this.handleError)
    //   );
  }

  getCustomer(id: string): Observable<Customer> {

    return of(customers.find(c => +c.customerId === +id));
    // return this.http.get<Customer[]>(this.customerUrl)
    //   .pipe(
    //     tap(customers => console.log(`Customers ${JSON.stringify(customers)}`)),
    //     catchError(this.handleError)
    //   );
  }

  createCustomer(customer: Customer): Observable<Customer> {
    customers.push(customer);
    return of(customer);
    // return this.http.post<Customer>(this.customerUrl, customer)
    //   .pipe(
    //     tap(customer => console.log(`Customer ${JSON.stringify(customer)}`)),
    //     catchError(this.handleError)
    //   );
  }

  updateCustomer(customer: Customer) {

    const index = customers.findIndex(x => +x.customerId === +customer.customerId);
    customers.splice(index, 1, customer);
    return of(customers);

    // return this.http.put<Customer>(this.customerUrl, customer)
    //   .pipe(
    //     tap(customer => console.log(`Customer ${JSON.stringify(customer)}`)),
    //     catchError(this.handleError)
    //   );
  }

  deleteCustomer(customerId: string) {
    
    const index = customers.findIndex(x => +x.customerId === +customerId);
    customers.splice(index, 1);
    return of(customers);
    // return this.http.post(this.customerUrl, customerId)
    //   .pipe(
    //     catchError(this.handleError)
    //   );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

export const customers: any =
  [
    {
      "customerId": 1,
      "firstName": "Leaf Rake",
      "lastName": "GDN-0011",
      "age": 10,
      "gender": "male",
      "contactDetails": {
        "phone": 112222,
        "email": "sdsadsad@sf.com"
      },
      "hobbies": [
        "Cricket",
        "Hockey"
      ]
    },
    {
      "customerId": 1,
      "firstName": "Leaf Rake",
      "lastName": "GDN-0011",
      "age": 10,
      "gender": "male",
      "contactDetails": {
        "phone": 112222,
        "email": "sdsadsad@sf.com"
      },
      "hobbies": [
        "Cricket",
        "Hockey"
      ]
    },
    {
      "customerId": 1,
      "firstName": "Leaf Rake",
      "lastName": "GDN-0011",
      "age": 10,
      "gender": "male",
      "contactDetails": {
        "phone": 112222,
        "email": "sdsadsad@sf.com"
      },
      "hobbies": [
        "Cricket",
        "Hockey"
      ]
    },
    {
      "customerId": 1,
      "firstName": "Leaf Rake",
      "lastName": "GDN-0011",
      "age": 10,
      "gender": "Male",
      "contactDetails": {
        "phone": 112222,
        "email": "sdsadsad@sf.com"
      },
      "hobbies": [
        "Cricket",
        "Hockey"
      ]
    },
    {
      "customerId": 1,
      "firstName": "Leaf Rake",
      "lastName": "GDN-0011",
      "age": 10,
      "gender": "male",
      "contactDetails": {
        "phone": 112222,
        "email": "sdsadsad@sf.com"
      },
      "hobbies": [
        "Cricket",
        "Hockey"
      ]
    }
  ];
