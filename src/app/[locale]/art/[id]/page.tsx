export default function Art({ params }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Art {params.id}
    </main>
  );
}
