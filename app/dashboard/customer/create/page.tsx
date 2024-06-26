import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: {
//       template: '%s | Create Invoices template title',
//       default: 'Create Invoices Dashboard default title',
//     },
//     description: 'The official Next.js Learn Dashboard built with App Router.',
//     metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
//   };

export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/customer' },
          {
            label: 'Create Customer',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}