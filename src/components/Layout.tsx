import React from "react";
import { useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div className=" bg-primary-dark text-gray flex items-center gap-10">
      <div>
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p>There are 7 total invoices</p>
      </div>
      <div className="ml-auto">Filter by status</div>
      <button className="bg-purple btn">
        <p>New Invoice</p>
      </button>
    </div>
  );
}
