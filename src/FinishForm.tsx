import FormWrapper from "./FormWrapper";

interface FinishFormProps {
  data: {
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
}

// firstName,lastName,age,street,city,state,zip,email,password
export default function FinishForm({ data }: any) {
  return (
    <FormWrapper title="Your information">
      <ul className="">
        {Object.keys(data).map((keyName, i) => (
          <li className="list-item" key={i}>
            <p>{keyName}:</p>
            <p style={{color: data[keyName]===""? "red" : "black"}}>{data[keyName]===""? "not filled in" : data[keyName]}</p>
          </li>
        ))}
      </ul>
    </FormWrapper>
  );
}
