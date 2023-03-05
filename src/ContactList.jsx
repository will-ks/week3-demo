import Controls from "./Controls";

// api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01

const ContactList = ({ onGenderChange, people, onPersonClicked }) => {
  return (
    <aside>
      <h1>Contact list</h1>
      <Controls onChange={onGenderChange} />
      {people.length > 0 ? (
        <ul>
          {people.map((user) => (
            <li key={user.id}>
              <button onClick={() => onPersonClicked(user.id)}>
                {user.firstname}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Loading ....</h2>
      )}
    </aside>
  );
};

export default ContactList;
