import { Suspense } from "react";

export default function Art({ data }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Art {JSON.stringify(data)}
    </main>
  );
}
