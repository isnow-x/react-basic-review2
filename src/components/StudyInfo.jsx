export default function StudyInfo({ reactData }) {
  return (
    <>
      <h2>첫 번째 데이터 출력</h2>
      <div>
        <h3>{reactData[0].title}</h3>
        <p>{reactData[0].desc}</p>
        <p>분류: {reactData[0].category}</p>
      </div>
    </>
  );
}
