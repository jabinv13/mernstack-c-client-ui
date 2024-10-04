import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const OrderSummary = () => {
  const couponCodeRef = React.useRef<HTMLInputElement>(null);
  const discountPercentage = 0.5;
  const grandWithoutDiscountTotal = 5555;
  const grandWithDiscountTotal = 55454;
  return (
    <Card className="w-2/5 border-none h-auto self-start">
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 pt-6">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-bold">₹555</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Taxes</span>
          <span className="font-bold">₹45</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Delivery charges</span>
          <span className="font-bold">₹40</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Discount</span>
          <span className="font-bold">₹10</span>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <span className="font-bold">Order total</span>
          <span className="font-bold flex flex-col items-end">
            <span
              className={discountPercentage ? "line-through text-gray-400" : ""}
            >
              ₹{grandWithoutDiscountTotal}
            </span>
            {discountPercentage ? (
              <span className="text-green-700">${grandWithDiscountTotal}</span>
            ) : null}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Input
            id="coupon"
            name="code"
            type="text"
            className="w-full"
            placeholder="Coupon code"
            ref={couponCodeRef}
          />
          {/* todo: add loading */}
          <Button variant={"outline"}>Apply</Button>
        </div>

        <div className="text-right mt-6">
          <Button>
            <span>Place order</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
