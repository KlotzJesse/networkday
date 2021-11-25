export default async function fetchData(type) {
  const res = await fetch(type);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
