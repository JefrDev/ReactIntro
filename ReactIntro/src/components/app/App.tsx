import ButtonType from "../customButton/ButtonType";
import CustomButton from "../customButton/CustomButton";

function App() {
  return (
    <div>
      <CustomButton buttonType={ButtonType.Primary}>DANGER!!</CustomButton>
    </div>
  );
}

export default App;
