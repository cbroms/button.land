import { getButton, listButtons } from '$lib/db';

export async function get({ params }) {
  const buttons = await listButtons();

  const data = [];
  for (const button of buttons) {
    const buttonData = await getButton(button);
    data.push(buttonData);
  }

  if (buttons) {
    return {
      body: { data }
    };
  }

  return {
    status: 404
  };
}
