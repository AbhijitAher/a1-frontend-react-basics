import { useState } from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";
import ListingDataSection from "./components/ListingDataSection";

function App() {
  const [peopleData, setPeopleData] = useState(false);
  return (
    <div>
      <SearchSection peopleData={peopleData} setPeopleData={setPeopleData} />
      {peopleData ? <ListingDataSection peopleData={peopleData} /> : null}
    </div>
  );
}

export default App;
