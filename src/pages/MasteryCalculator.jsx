import { useState } from "react";

function MasteryCalculator() {
  const [currentMasteryLvl, setCurrentMasteryLvl] = useState(0);
  const [targetMasteryLvl, setTargetMasteryLvl] = useState(0);
  const [masteryPerRun, setMasteryPerRun] = useState(0);
  const [runs, setRuns] = useState(null);
  const MAX_MASTERY = 600;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const xpForNextMastery = Math.ceil(currentMasteryLvl ** 2.26 + 69);

  function runsForTargetMastery() {
    let exp = 0;
    for (let i = currentMasteryLvl; i < targetMasteryLvl; i++) {
      exp += Math.ceil(i ** 2.26 + 69);
    }
    return Math.ceil(exp / masteryPerRun);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-5 rounded-xl border border-slate-700 bg-slate-800/70 p-6">
        <h1 className="text-center text-2xl font-semibold">
          Mastery Calculator
        </h1>

        <div>
          <label className="mb-1 block text-sm text-slate-300">
            Current Mastery Level
          </label>
          <input
            type="number"
            value={currentMasteryLvl}
            onChange={(e) => {
              setCurrentMasteryLvl(e.target.value);
              setRuns(null);
            }}
            onBlur={() =>
              setCurrentMasteryLvl(clamp(currentMasteryLvl, 1, MAX_MASTERY))
            }
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            min={1}
            max={MAX_MASTERY}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-slate-300">
            Target Mastery Level
          </label>
          <input
            type="number"
            value={targetMasteryLvl}
            onChange={(e) => {
              setTargetMasteryLvl(e.target.value);
              setRuns(null);
            }}
            onBlur={() =>
              setTargetMasteryLvl(clamp(targetMasteryLvl, 1, MAX_MASTERY))
            }
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            min={1}
            max={MAX_MASTERY}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-slate-300">
            Mastery Per Run
          </label>
          <input
            type="number"
            value={masteryPerRun}
            onChange={(e) => {
              setMasteryPerRun(e.target.value);
              setRuns(null);
            }}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() => {
            if (masteryPerRun <= 0 || targetMasteryLvl <= currentMasteryLvl)
              return;
            setRuns(runsForTargetMastery());
          }}
          className="mt-2 w-full rounded-lg bg-indigo-600 py-3 font-medium transition-colors hover:bg-indigo-500 active:bg-indigo-700"
        >
          Calculate
        </button>

        {runs !== null && (
          <div>
            <p className="text-center text-slate-300">
              You need {runs} runs to reach mastery {targetMasteryLvl}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MasteryCalculator;
