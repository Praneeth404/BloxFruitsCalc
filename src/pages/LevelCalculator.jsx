import { useState } from "react";

function LevelCalculator() {
  const [currentLvl, setCurrentLvl] = useState(0);
  const [currentExp, setCurrentExp] = useState(0);
  const [targetLvl, setTargetLvl] = useState(0);
  const [expPerRun, setExpPerRun] = useState(0);
  const [runs, setRuns] = useState(null);
  const MAX_LVL = 2800;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const xpForNextLvl = Math.ceil(2 * currentLvl ** 2.3 + 84);

  function runsForTargetLevel() {
    let exp = xpForNextLvl - currentExp;
    for (let i = currentLvl + 1; i < targetLvl; i++) {
      exp += Math.floor(2 * i ** 2.3 + 84);
    }
    const runsForTargetLvl = Math.ceil(exp / expPerRun);
    return runsForTargetLvl;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-5 rounded-xl border border-slate-700 bg-slate-800/70 p-6">
        <h1 className="text-center text-2xl font-semibold">Level Calculator</h1>
        <div>
          <label
            htmlFor="currentLvl"
            className="mb-1 block text-sm text-slate-300"
          >
            Current Level
          </label>
          <input
            type="number"
            id="currentLvl"
            value={currentLvl}
            onChange={(e) => {
              setCurrentLvl(e.target.value);
              setRuns(null);
            }}
            onBlur={() => setCurrentLvl(clamp(currentLvl, 1, MAX_LVL))}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            min={1}
            max={2800}
          />
        </div>
        <div>
          <label
            htmlFor="currentExp"
            className="mb-1 block text-sm text-slate-300"
          >
            Current Exp
          </label>
          <input
            type="number"
            id="currentExp"
            placeholder={xpForNextLvl}
            value={currentExp}
            onChange={(e) => {
              setCurrentExp(e.target.value);
              setRuns(null);
            }}
            onBlur={() => setCurrentExp(clamp(currentExp, 0, xpForNextLvl))}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="expPerRun"
            className="mb-1 block text-sm text-slate-300"
          >
            Exp Per Run
          </label>
          <input
            type="number"
            id="expPerRun"
            value={expPerRun}
            onChange={(e) => {
              setExpPerRun(e.target.value);
              setRuns(null);
            }}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="targetLvl"
            className="mb-1 block text-sm text-slate-300"
          >
            Target Level
          </label>
          <input
            type="number"
            id="targetLvl"
            value={targetLvl}
            onChange={(e) => {
              setTargetLvl(e.target.value);
              setRuns(null);
            }}
            onBlur={() => setTargetLvl(clamp(targetLvl, 1, MAX_LVL))}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            min={1}
            max={2800}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              if (expPerRun <= 0 || targetLvl < currentLvl) return;
              setRuns(runsForTargetLevel());
            }}
            className="mt-2 w-full rounded-lg bg-indigo-600 py-3 font-medium transition-colors duration-150 hover:bg-indigo-500 active:bg-indigo-700"
          >
            Calculate
          </button>
        </div>

        {runs !== null && (
          <div id="result" className="flex items-center justify-center">
            <p>
              You need {runs} runs to reach {targetLvl}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LevelCalculator;
