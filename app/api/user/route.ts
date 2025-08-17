import { getUser } from '@/lib/db/queries';
import { isDatabaseAvailable } from '@/lib/env-check';

export async function GET() {
  // Check if database is available
  if (!isDatabaseAvailable()) {
    return Response.json(
      { error: 'Service temporarily unavailable' },
      { status: 503 }
    );
  }

  const user = await getUser();
  return Response.json(user);
}
