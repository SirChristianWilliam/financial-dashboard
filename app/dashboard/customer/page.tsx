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
import React from 'react'; // Import React module


export const metadata: Metadata = {
  title: 'Customers',
};


// Add missing imports here

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  const customersFiltered = await fetchFilteredCustomers(query);

  return (
    <>
      <Table customers={customersFiltered as FormattedCustomersTable[]} />
      <Pagination totalPages={totalPages} />
    </>
  );
}


