export default function StudyInfo({ title, desc, category }) {
  return (
    <>
      <h2>첫 번째 데이터 출력</h2>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>분류: {category}</p>
      </div>
    </>
  );
}
