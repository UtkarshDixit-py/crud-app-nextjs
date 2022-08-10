import { useReducer } from "react";
import { BiPlus } from 'react-icons/bi'
import Success from "./Success";
import Bug  from "./Bug";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addUser } from "../lib/helper";
import { getUsers } from "../lib/helper";




export default function AddUserForm({formData,setFormData}) {
  const queryClient = useQueryClient()
  const addMutation = useMutation(addUser,{
    onSuccess : ()=>{
      queryClient.prefetchQuery('users',getUsers)
    }
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(formData).length==0)return console.log("Dont have enough data")
    let{firstname,lastname,email,salary,date,status} = formData;

    const model = {
      name : `${firstname} ${lastname}`,
      avatar : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*10)}.jpg`,
      email,salary,date,status : status ?? "Active"
    }
    addMutation.mutate(model)
  }

  if(addMutation.isLoading) return <div>Loading!</div>
  if(addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  if(addMutation.isSuccess) return <Success msg={"Data Added"}></Success>

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="firstname"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="lastname"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="email"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="salary"
          className="border bg-white w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="date"
          name="date"
          className="border px-5 py-3 bg-white focus:outline-none rounded-md"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            onChange={setFormData}
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
        Add<span className="px-1"><BiPlus size={24}></BiPlus></span>
      </button>
    </form>
  );
}
