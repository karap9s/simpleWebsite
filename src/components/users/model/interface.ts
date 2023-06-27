interface UsersAddressType {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
}

interface UsersCompanyType {
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

export interface UsersPropsType {
  address: UsersAddressType;
  company: UsersCompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
