import Alert from "../alert/Alert";
import { useState } from "react";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <Alert
        onClose={() => setAlertVisibility(false)}
        active={alertVisibility}
      ></Alert>
      <button onClick={() => setAlertVisibility(true)}>Alert!</button>
    </div>
  );
}

export default App;
