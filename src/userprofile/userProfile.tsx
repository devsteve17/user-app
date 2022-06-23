import React from "react";
import { Heading, Card } from "react-bulma-components";
const { Content } = Card;

type UserprofileProps = {
  user: User;
};

// type Address = {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
// };

// TODO chage type to Address
type User = {
  [key: string]: string | any;
};

export const UserProfile = (props: UserprofileProps) => {
  const { username, name, email, address, phone, company } = props.user;

  const addressText = `${address?.street}, ${address?.suite}, ${address?.city}, ${address?.zipcode}`;
  return (
    <>
      <Heading renderAs="h3">Users profile</Heading>
      <Card style={{ margin: "auto" }}>
        <Content>
          <p>Username: {username}</p>
          <p>Full name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {addressText}</p>
          <p>Phone number: {phone}</p>
          <p>Company name: {company?.name}</p>
        </Content>
      </Card>
    </>
  );
};
