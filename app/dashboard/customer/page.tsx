import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { myFonts } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages, fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import {
  CustomersTableType,
  FormattedCustomersTable,
  CustomerField,
} from '@/app/lib/definitions';


export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchCustomers(); // Fetch the customers data
  const customersFiltered = await fetchFilteredCustomers("");

  return (
    <>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${myFonts.lusitana.className} text-2xl`}>Customers</h1>
        </div>

        <div className="mt-5 flex w-full justify-center">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  {/* Add more table cells for other customer properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <Table customers={customersFiltered as FormattedCustomersTable[]} />    </>
  );
}

