import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { myFonts } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages, fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer yess',
};

export default async function Page() {
  const customers = await fetchCustomers(); // Fetch the customers data

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${myFonts.lusitana.className} text-2xl`}>Customers</h1>
      </div>

      <div className="mt-5 flex w-full justify-center">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              {/* Add more table headers if needed */}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                {/* Add more table cells for other customer properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}