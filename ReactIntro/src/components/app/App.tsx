import Message from "../message/Message";
import ListGroup from "../listGroup/ListGroup";

function App() {
  let items = ["bodegraven", "gouda", "delft", "hamburg"];

  const handleOnSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"cities"}
        onSelectItem={handleOnSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
