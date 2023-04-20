

export const headers = {
  "Content-Type": "application/json",
}

export async function fetchAndParse(input, init) {
  const response = await fetch(input, init);
  if (response.status >= 400) {
    throw {
      status: response.status,
      data: await response.json()
    }
  }
  return response.json();
}
