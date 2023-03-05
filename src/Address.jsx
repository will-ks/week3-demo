const Address = ({ user }) => {
  return user ? (
    <aside>
      <h1>Address</h1>
      <p>{`${user.address.streetName}, ${user.address.city}`}</p>
      <p>{user.address.zipcode}</p>
      <p>{user.address.country}</p>
    </aside>
  ) : (
    <h2>No user selected</h2>
  );
};

export default Address;
