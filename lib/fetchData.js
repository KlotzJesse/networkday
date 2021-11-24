export default async function fetchData(type) {
  const [res] = await Promise.all([fetch(type)]);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
