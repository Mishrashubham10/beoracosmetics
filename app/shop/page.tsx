import { Suspense } from "react";
import { ShopClient } from "./_ShopClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading shop...</div>}>
      <ShopClient />
    </Suspense>
  );
}