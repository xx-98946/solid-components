import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Test from "./pages/Test";

export default function App() {
  return (
    <div class="font-mono dark:text-stone-400 dark:bg-slate-900">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
      </Router>
    </div>
  );
}
