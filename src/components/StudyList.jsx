export default function StudyList({ items, selectedId, onSelect, category, setCategory }) {
  const filteredItems =
    category === "all" ? items : items.filter(item => item.category === category);
  const list = filteredItems.map(item => (
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
      <h2>카테고리 필터</h2>
      <div className="buttonDiv">
        <button onClick={() => setCategory("all")}>전체</button>
        <button onClick={() => setCategory("concept")}>concept</button>
        <button onClick={() => setCategory("library")}>library</button>
        <button onClick={() => setCategory("hook")}>hook</button>
      </div>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}
