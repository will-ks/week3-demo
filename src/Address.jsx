import { USERS } from "./data";

const user = USERS.data[0];

const Address = () => {
  return (
    <aside>
      <h1>Address</h1>
      <p>{`${user.address.streetName}, ${user.address.city}`}</p>
      <p>{user.address.zipcode}</p>
      <p>{user.address.country}</p>
    </aside>
  );
};

export default Address;
