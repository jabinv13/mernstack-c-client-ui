import { startTransition, useEffect, useState } from "react";
import ToppingCard, { Topping } from "./ToppingCard";
import { useSearchParams } from "next/navigation";

const ToppingList = ({
  selectedToppings,
  handleCheckBoxCheck,
}: {
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
}) => {
  const searchParams = useSearchParams();
  const [toppings, setToppings] = useState<Topping[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      //make tenantid dynamic
      const toppingResponse = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL
        }/api/catalog/toppings?tenantId=${searchParams.get("restaurantId")}`
      );

      const toppings = await toppingResponse.json();
      setToppings(toppings);

      console.log("toppings", toppings);
    };

    fetchData();
  }, []);

  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-3 ">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
