import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Get started</h1>
      <p>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meal</Link>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
