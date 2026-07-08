import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudtList from "./components/StudyList";

function App() {
  console.log(reactData);
  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {reactData.length}개</p>
      <StudyInfo
        title={reactData[0].title}
        desc={reactData[0].desc}
        category={reactData[0].category}
      />
      <StudtList items={reactData} />
    </>
  );
}

export default App;
