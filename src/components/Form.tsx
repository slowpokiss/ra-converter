import "./Form.css";
import Input from "./Input";
import Converter from "./Converter";
import { FormEvent, useState, CSSProperties } from "react";

export default function Form() {
  const [state, setState] = useState("");
  const [converted, setConverted] = useState<{ backgroundColor?: string }>({});

  const onInputChange = (ev: FormEvent<HTMLInputElement>): void => {
    ev.preventDefault();
    setState((ev.target as HTMLInputElement).value);
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    const result = Converter(state);
    if (result) {
      setConverted({
        backgroundColor: result,
      });
    } else {
      setConverted({});
    }
  };

  return (
    <>
      <div className="container" style={converted as CSSProperties}>
        <div className="form">
          <form className="converter-form" onSubmit={onSubmit}>
            <Input value={state} onChange={onInputChange} />
            <div className="converter-item converter-output">
              {converted.backgroundColor ? converted.backgroundColor : "Ошибка"}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
