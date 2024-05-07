import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Table from "@/app/ui/invoices/table";
import { ProductButton } from "@/app/ui/products/Button";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { CustomizedTables } from "@/app/ui/products/ProductTable";





export default function Page() {
  return (
  <>
    <h2>Products Page</h2>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search product..." />
        <CreateInvoice />
      </div>
      <Suspense key={'query' + 1} fallback={<InvoicesTableSkeleton />}>
        <CustomizedTables/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
      
  </>
  )
}