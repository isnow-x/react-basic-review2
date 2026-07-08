export default function StudyList({ items, selectedId, onSelect }) {
  const list = items.map(item => (
    <div
      className={item.id === selectedId ? "active" : ""}
      key={item.id}
      onClick={() => onSelect(item.id)}
    >
      <h3>
        {item.id}. {item.title}
      </h3>
      <p>{item.desc}</p>
      <p>분류: {item.category}</p>
      <strong className={item.id === selectedId ? "active" : ""}>선택된 항목입니다.</strong>
    </div>
  ));
  return (
    <>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}
