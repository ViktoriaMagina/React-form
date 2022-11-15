import FormWrapper from "./FormWrapper";

type UserData = {
    firstName: string;
    lastName: string;
    age: string;
};

interface UserFormProps {
    firstName: string;
    lastName: string;
    age: string;
    updateForm: (fields: Partial<UserData>) => void;
}

export default function UserForm({
  updateForm,
  firstName,
  lastName,
  age,
}: UserFormProps) {
  return (
    <FormWrapper title={"Your Info"}>
      <label>First Name</label>
      <input onChange={(e)=>updateForm({firstName: e.target.value})} value={firstName} required autoFocus type="text" />
      <label>Last Name</label>
      <input onChange={(e)=>updateForm({lastName: e.target.value})} value={lastName} autoFocus type="text" />
      <label>Age</label>
      <input onChange={(e)=>updateForm({age: e.target.value})} value={age} required min={1} type="number" />
    </FormWrapper>
  );
}
