"use client";
import { AppStore, makeStore } from "@/lib/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    //todo:initial cart data from local storage
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
