import { cookies } from 'next/headers';
import WorksheetsClient from './WorksheetsClient';

export default async function WorksheetsPage() {
  const jar = await cookies();
  const subscribed = jar.get('subscribed')?.value === 'true';
  return <WorksheetsClient subscribed={subscribed} />;
}
