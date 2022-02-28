import { getButton } from '$lib/db';

export async function get({ params }) {
  const data = await getButton(params.id);

  if (data) {
    return {
      body: { data }
    };
  }

  return {
    status: 404
  };
}
