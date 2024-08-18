import { useState } from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";

function App() {
  const [peopleData, setPeopleData] = useState(false);
  return (
    <div>
      <SearchSection peopleData={peopleData} setPeopleData={setPeopleData} />
    </div>
  );
}

export default App;
