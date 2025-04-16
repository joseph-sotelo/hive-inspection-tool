import PowerPlants from '@/components/PowerPlants';
import { getPowerPlants } from './utils';

export const revalidate = 3600;

export default async function Home() {
  const data = await getPowerPlants();

  return (
    <section>
        <PowerPlants {...data} />
    </section>
  )
}