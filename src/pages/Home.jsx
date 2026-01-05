import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-30 blur-3xl"></div>

            <h1 className="relative text-4xl font-bold tracking-tight transition-transform duration-200 ease-out hover:-translate-y-1 sm:text-5xl lg:text-6xl">
              BloxFruitsCalc
            </h1>
          </div>

          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            A free helper for Blox Fruits Grinders
          </p>

          {/* Links to Calculators */}
          <div className="mt-6 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Link to="/level" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full rounded-lg border-t border-t-indigo-300 bg-indigo-600 px-6 py-4 whitespace-nowrap transition-colors duration-200 hover:bg-indigo-500 active:bg-indigo-700 sm:w-auto"
              >
                Level Calculator
              </button>
            </Link>

            <Link to="/mastery" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full rounded-lg border-t border-t-purple-300 bg-purple-600 px-6 py-4 whitespace-nowrap transition-colors duration-200 hover:bg-purple-500 active:bg-purple-700 sm:w-auto"
              >
                Mastery Calculator
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-linear-to-b from-slate-900/40 to-slate-800/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            What can this do?
          </h2>

          <div className="flex flex-col justify-center gap-10 sm:flex-row">
            <div className="mx-auto max-w-xs">
              <p className="mb-1 font-medium text-indigo-400">
                Plan your levels
              </p>
              <p className="text-sm text-slate-300">
                Know exactly how much XP you need before you grind.
              </p>
            </div>

            <div className="mx-auto max-w-xs">
              <p className="mb-1 font-medium text-purple-400">Track mastery</p>
              <p className="text-sm text-slate-300">
                See how close you are to unlocking the next move.
              </p>
            </div>

            <div className="mx-auto max-w-xs">
              <p className="mb-1 font-medium text-indigo-400">Save time</p>
              <p className="text-sm text-slate-300">
                Stop guessing and focus on what actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="flex items-center justify-center px-4 py-3">
        <p className="text-center text-xs text-slate-400 opacity-70">
          Not Affiliated with Roblox or Blox Fruits.
        </p>
      </section>
    </>
  );
}

export default Home;
