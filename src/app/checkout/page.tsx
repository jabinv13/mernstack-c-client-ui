import React from "react";
import CustomerForm from "./components/customerForm";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

async function Checkout() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return <CustomerForm />;
}

export default Checkout;
