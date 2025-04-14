import Schools from '@/components/Schools';
import { getSchoolData } from './utils';

export const revalidate = 3600;

export default async function Home() {
  const data = await getSchoolData();

  return (
    <section>
        <Schools {...data} />
    </section>
  )
}