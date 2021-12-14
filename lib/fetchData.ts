export default async function fetchData(path: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + path);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
