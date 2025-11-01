import React from "react";
import "mvp.css";
import AddressBookDisplay from "./AddressBookDisplay";
import ConditionalRender from "./ConditionalRender";

function App() {
  return (
    <>
      <header>
        <h1>Address Book</h1>
      </header>
      <ConditionalRender isEndOfDay={true} favouriteNumber={33} />
      <main>
        <section>
          <AddressBookDisplay />
        </section>
      </main>
    </>
  );
}

export default App;
