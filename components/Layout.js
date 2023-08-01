export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className="h-screen relative overflow-hidden mb-8">
          <div className="h-full rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
