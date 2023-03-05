import { useEffect, useState } from "react";
import Address from "./Address";
import ContactList from "./ContactList";

const AddressBookDisplay = () => {
  const [people, setPeople] = useState([]);
  const [gender, setGender] = useState("male");
  const [selectedPerson, setSelectedPerson] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      const res = await fetch(
        `api/v1/persons?_quantity=10&_gender=${gender}&_birthday_start=2005-01-01`,
        { signal }
      );
      const json = await res.json();
      setPeople(json.data);
    })();
    return () => {
      // cancel the previous fetch
      controller.abort();
    };
  }, [gender]);

  return (
    <>
      <ContactList
        people={people}
        onGenderChange={(gender) => setGender(gender)}
        onPersonClicked={(personId) => setSelectedPerson(personId)}
      />
      <Address user={people.find((person) => person.id === selectedPerson)} />
    </>
  );
};

export default AddressBookDisplay;
