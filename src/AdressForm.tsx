import FormWrapper from "./FormWrapper"

type UserData = {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface AdressFormProps{
    street: string;
    city: string;
    state: string;
    zip: string;
    updateForm: (fileds: Partial<UserData>)=> void
}


export default function AdressForm({updateForm,street,city,state,zip}: AdressFormProps){
    return(
        <FormWrapper title={"Your Adress"}>
        <label>Street</label>
        <input onChange={(e)=> updateForm({street: e.target.value})} value={street} required autoFocus type="text" />
        <label>City</label>
        <input onChange={(e)=> updateForm({city: e.target.value})} value={city} required type="text" />
        <label>State</label>
        <input onChange={(e)=> updateForm({state: e.target.value})} value={state} required type="text" />
        <label>Zip</label>
        <input onChange={(e)=> updateForm({zip: e.target.value})} value={zip} required type="text" />
        </FormWrapper>
    )
}