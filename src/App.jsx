import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LevelCalculator = lazy(() => import("./pages/LevelCalculator"));
const MasteryCalculator = lazy(() => import("./pages/MasteryCalculator"));

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-center mt-20 text-slate-300">
            <div className="w-8 h-8 border-4 border-slate-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/level" element={<LevelCalculator />} />
            <Route path="/mastery" element={<MasteryCalculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;
