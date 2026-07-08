export default function StudtList({ items }) {
  const list = items.map(i => (
    <div key={i.id}>
      <h3>
        {i.id}. {i.title}
      </h3>
      <p>{i.desc}</p>
      <p>분류: {i.category}</p>
    </div>
  ));
  return (
    <>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}
