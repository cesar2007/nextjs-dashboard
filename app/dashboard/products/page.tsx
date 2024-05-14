import { lusitana } from "@/app/ui/fonts"
import Search from "@/app/ui/search";
import ProductsTable  from "@/app/ui/products/ProductTable";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";


export default function Page(){

    const query = "";
    const currentPage = 1;


    return (
        <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        {/* <CreateInvoice /> */}
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <ProductsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
    )
  }