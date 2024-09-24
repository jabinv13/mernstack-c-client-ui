import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import ToppingList from "./ToppingList";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import ProductModal from "./ProductModal";
import { getFromPrice } from "@/lib/utils";

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="birder-none rounded-xl">
      <CardHeader>
        <Image alt="pizza-image" width={150} height={150} src={product.image} />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From </span>
          <span className="font-bold">₹{getFromPrice(product)}</span>
        </p>
        {/* dialog */}
        <ProductModal product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
