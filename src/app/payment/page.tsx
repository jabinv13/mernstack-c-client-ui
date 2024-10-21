import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  CheckCircle2,
  CircleX,
  LayoutDashboard,
  Store,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Payment = ({
  searchParams,
}: {
  searchParams: { success: string; orderId: string };
}) => {
  const isOrderSuccess = searchParams.success === "true";
  return (
    <div className="flex flex-col items-center gap-4 w-full mt-20">
      {isOrderSuccess ? (
        <CheckCircle2 size={80} className="text-green-500" />
      ) : (
        <CircleX size={80} className="text-green-500" />
      )}

      <h1 className="text-2xl front-bold mt-2 text-center ">
        Order placed successfully
      </h1>
      <p className="text-base font-semibold">Thank you for your order .</p>

      <Card className="mt-6">
        <CardHeader className="p-4 ">
          <CardTitle className="flex items-start text-lg  justify-between">
            <div className="flex items-center gap-3">
              <Store size={35} className="text-primary" />
              <span>Your order information</span>
            </div>
            <Badge className="text-base px-4" variant={"secondary"}>
              Confirmed
            </Badge>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-2">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={20} />
            <h2 className="text-base font-medium">Order reference :</h2>
            <Link href="/" className="underline">
              25656565
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <LayoutDashboard size={20} />
            <h2 className="text-base font-medium">Payment status : :</h2>
            <span>Paid</span>
          </div>
        </CardContent>
      </Card>

      <Button asChild className="mt-6 ">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft size={20} className="text-white" />
          <span>Place another order</span>
        </Link>
      </Button>
    </div>
  );
};

export default Payment;
