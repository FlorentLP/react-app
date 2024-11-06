function ListGroup() {
  const items = [
    "Get out fast of bed",
    "Cold shower",
    "Drink a glass of water",
    "get dressed",
  ];

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>Habits</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
