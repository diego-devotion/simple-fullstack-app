import { trpc } from './utils/trpc';

export default function Test() {
  const healthCheck = trpc.health.check.useQuery();
  return <p>{healthCheck.data?.status}</p>;
}
