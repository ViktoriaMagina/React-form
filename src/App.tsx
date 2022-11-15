import { FormEvent, useState } from "react";
import { useMultistepForm } from "./hooks/useMultistepForm";
import "./App.css";
import UserForm from "./UserForm";
import AccountForm from "./AccountForm";
import AdressForm from "./AdressForm";
import FinishForm from "./FinishForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateForm(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }
  const {
    currentStepIndex,
    next,
    prev,
    steps,
    currentStep,
    ifFirstStep,
    ifLastStep,
    ifFinishStep,
    setCurrentStepIndex
  } = useMultistepForm([
    <AccountForm updateForm={updateForm} {...data} />,
    <AdressForm updateForm={updateForm} {...data} />,
    <UserForm updateForm={updateForm} {...data} />,
    <FinishForm data={data} />,
  ]);
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    next();
  };
  function formAgain(){
    setData(INITIAL_DATA)
    setCurrentStepIndex(0)
  }
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div className="current-step">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {currentStep}
        {!ifFinishStep && (
          <div className="form-buttons">
            {!ifFirstStep && (
              <button className="btn" type="button" onClick={() => prev()}>
                back
              </button>
            )}
            {
              <button type="submit" className="btn">
                {ifLastStep ? "finish" : "next"}
              </button>
            }
          </div>
        )}
        {ifFinishStep && (
          <button className="btn" onClick={() => formAgain()}>
            Re-enter the your data
          </button>
        )}
      </form>
    </div>
  );
}

export default App;
