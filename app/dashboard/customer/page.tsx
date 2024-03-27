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
  const customersFiltered = await fetchFilteredCustomers("");

  return (
    <>
      <Table customers={customersFiltered as FormattedCustomersTable[]} />
    </>
  );
}

