import Head from "next/head";
import Table from "../components/Table";
import Form from "../components/Form";

import { BiUserPlus } from "react-icons/bi";

export default function Home() {
  return (
    <section>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employe Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex  bg-gray-50  text-gray-800 px-4 py-2 border rounded-md hover:bg-indigo-500 hover:border-indigo-500 hover:text-white">
              Add Employee
              <span className="px-1">
                <BiUserPlus size={25}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        <div className="container mx-auto">
          <Form />
        </div>

        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
