import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import { useState } from "react";

function App() {
  console.log(reactData);

  const [selectedId, setSelectedId] = useState(null);
  const onSelect = _id => {
    setSelectedId(_id);
  };
  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {reactData.length}개</p>
      <StudyInfo
        title={reactData[0].title}
        desc={reactData[0].desc}
        category={reactData[0].category}
      />
      <StudyList items={reactData} selectedId={selectedId} onSelect={onSelect} />
    </>
  );
}

export default App;
