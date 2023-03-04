import React from "react";
import "mvp.css";
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
          <ContactList />
          <Address />
        </section>
      </main>
    </>
  );
}

export default App;
