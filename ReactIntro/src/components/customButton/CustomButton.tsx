import ButtonType from "./ButtonType";
import { useState } from "react";

interface Props {
  buttonType: ButtonType;
  children: string;
}

function CustomButton({ buttonType, children }: Props) {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count.valueOf() + 1);
    console.log(count);
  }

  function handleClassName() {
    return "btn btn-" + buttonType.valueOf();
  }

  return (
    <button type="button" onClick={onButtonClick} className={handleClassName()}>
      {children}
    </button>
  );
}

export default CustomButton;
