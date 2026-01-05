import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-slate-900 to-indigo-900 text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 md:px-8">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
