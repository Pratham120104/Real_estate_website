import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🏡 Real Estate Marketplace</h1>
      <p className="mt-2 text-green-600">{msg}</p>
    </div>
  );
}
