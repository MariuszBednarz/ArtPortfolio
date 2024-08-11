import { Suspense } from "react";

export default function Bio({ bio }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>loading</div>}>
        Bio
        {JSON.stringify(bio)}
      </Suspense>
    </main>
  );
}
