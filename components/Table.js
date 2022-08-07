import { BiEdit, BiTrashAlt } from "react-icons/bi";


export default function Table(){
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800" >
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
            <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
                        <img src="#" alt="" />
                        <span className="text-center ml-2 font-semibold">Utkarsh</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>utkarsh@gmail.com</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>8000000</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>14-08-1999</span>
                    </td>
                    <td className="px-16 py-2">
                        <button className="cursor"><span className="bg-green-500 text-white px-5 py-1 rounded-full">Active</span></button>
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-5">
                        <button className="cursor"><BiEdit size={25} color={"green"}></BiEdit></button>
                        <button className="cursor"><BiTrashAlt size={25} color={"red"}></BiTrashAlt></button>
                    </td>
            </tr>
            </tbody>
        </table>
    )
}