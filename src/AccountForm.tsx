import FormWrapper from "./FormWrapper"

type UserData = {
    email: string;
    password: string;
}

interface AccountFormProps{
    email: string;
    password: string;
    updateForm: (fields: Partial<UserData>)=> void
}

export default function AccountForm({ email, password, updateForm}: AccountFormProps){
    return(
        <FormWrapper title={"Your Login"}>
        <label>Email</label>
        <input onChange={(e)=> updateForm({email: e.target.value})} value={email} required autoFocus type="email" />
        <label>Password</label>
        <input onChange={(e)=> updateForm({password: e.target.value})} value={password} required type="password" />
        </FormWrapper>
    )
}