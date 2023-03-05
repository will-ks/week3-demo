import React from "react";
import "mvp.css";
import AddressBookDisplay from "./AddressBookDisplay";
import ContactList from "./ContactList";
import Address from "./Address";

function App() {
  return (
    <>
      <header>
        <h1>Address Book</h1>
      </header>
      <main>
        <section>
          <AddressBookDisplay />
        </section>
      </main>
    </>
  );
}

export default App;
