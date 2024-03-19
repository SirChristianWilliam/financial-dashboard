import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
      template: '%s | Acme Dashboard template title',
      default: 'Customer Dashboard default title',
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  };

export default function Page() {
  return <p>CUSTOMER Page</p>;
}