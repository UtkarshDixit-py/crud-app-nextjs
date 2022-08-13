import { useSelector } from "react-redux";
import AddUserForm from "./AddUserForm"
import UpdateUserForm from "./UpdateUserForm"
import { useReducer } from "react";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {

  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useSelector((state)=>state.app.client.formId)
  const flag=false;
  
  return(
    <div className="container mx-auto py-5">
      <p>{formId}</p>
      {formId ? UpdateUserForm({formId,formData,setFormData}): AddUserForm({formData,setFormData})}
      {/* {formId ? <UpdateUserForm /> : <AddUserForm />} */}
      {/* {flag ? <AddUserForm /> : <UpdateUserForm />} */}
    </div>
  )
}
