import { getButton } from '$lib/db';

export async function get({ params }) {
  const data = await getButton(params.id);

  if (data) {
    const website = new URL(data.buttons[0].data.meta.source).hostname;

    return {
      body: { data, id: params.id, website }
    };
  }

  return {
    status: 404
  };
}
