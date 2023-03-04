import Controls from "./Controls";
import { USERS } from "./data";

// api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01

const ContactList = () => {
  return (
    <aside>
      <h1>Contact list</h1>
      <Controls />
      <ul>
        {USERS.data.map((user) => (
          <li>
            <button>{user.firstname}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ContactList;
