import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>ALERTTTTTTTTTTTTTTT</Alert>
      )}
      <Button
        name="test"
        color="secondary"
        onClick={() => setShowAlert(true)}
      ></Button>
    </div>
  );
}

export default App;
