export interface Address {
  street1?: string;
  street2?: string;
  landmark?: string;
  pincode?: string;
}

export interface ContactDetails {
  phone?: string;
  email?: string;
  address?: Address;
}

export interface Customer {
  customerId?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  gender?: string;
  contactDetails?: ContactDetails;
  hobbies?: Array<string>;
}
