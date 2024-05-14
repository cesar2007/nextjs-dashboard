import { fetchProducts } from "@/app/lib/data";
import Image from 'next/image';
import { DeleteInvoice, UpdateInvoice } from "../invoices/buttons";
import { formatDateToLocal } from "@/app/lib/utils";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";


export default async function ProductsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}){

  const products = await fetchProducts(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">

          {/* {products?.map((product) => (
              <div
                key={product.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={product.imageUrl}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s product picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(product.updatedAt)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={product.id} />
                    <DeleteInvoice id={product.id} />
                  </div>
                </div>
              </div>
            ))} */}


          </div>

          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Product
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Updated at
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.imageUrl}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(product.updatedAt) }
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={product.id.toString()} />
                      <DeleteInvoice id={product.id.toString()} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>
      </div>
    </div>
  )


}



// filtrar por categoría

// import { products as initialProducts } from json
//  const [products] = useState(initialProducts);
// const [filters, setFilters] = useState({
  // category: 'all',
  // minPrice: 0
// })

// const filterProducts = (products) => {
//   return products.filter(product => {
//     return (
//       product.price >= filters.minPrice &&
//        (
            // flightRouterStateSchema.catefory === 'all' ||
            // products.category === flightRouterStateSchema.category

//        )
//     )
//   })
// }

// const filteredProducts = filterProducts(products)

// return (
//   <Products products={filterProducst(filteredProducts)} />
// )
// }
