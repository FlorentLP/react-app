import ListGroup from "./components/ListGroup.tsx";

function App() {
  const items = [
    "Get out fast of bed",
    "Cold shower",
    "Drink a glass of water",
    "get dressed",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Habits"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
