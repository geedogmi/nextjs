// /pages/api/connectToBackend1.js
export default async function handler(req, res) {
  const response = await fetch('http://localhost:3001');
  const data = await response.json();
  res.status(200).json(data);
}

