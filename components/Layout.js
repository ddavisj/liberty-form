export default function Layout({ children }) {
  return (
    <>
      <main className="h-full relative mb-8">
        <div className="h-full rounded-t-lg border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
          {children}
        </div>
      </main>
    </>
  );
}
