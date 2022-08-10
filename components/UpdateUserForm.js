import { useReducer } from "react";
import Success from "./Success";
import Bug  from "./Bug";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/helper";


export default function UpdateUserForm({formId,formData,setFormData}) {

  const {isLoading ,isError,data,error} = useQuery(['users',formId],()=>getUser(formId))

   
  if(isLoading)return <div>Loading....</div>
  if(isError) return <div>Error</div>


  const {name , avatar,salary,date,email,status} = data;
  const [firstname,lastname] = name ? name.split('') : formData
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(formData).length==0)return console.log("Dont have enough data")
    console.log(formData);
  }


  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="firstname"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
          defaultValue={firstname}
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="lastname"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
          defaultValue={lastname}
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="email"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
          defaultValue={email}
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="salary"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
          defaultValue={salary}
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="date"
          name="date"
          className="border px-5 py-3 bg-white focus:outline-none rounded-md"
          defaultValue={date}
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status=="Active"}
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status !=="Active"}
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6    bg-gray-50 border-green-500 text-green-500 px-4 py-2 border rounded-md hover:bg-green-500  hover:text-white">
        Update
      </button>
    </form>
  );
}
