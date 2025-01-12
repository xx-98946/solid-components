import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Link from "./pages/Link";
import Layout from "./comps/Layout";
import Header from "./pages/common/Header";

export default function App() {
  return (
    <div class="font-mono dark:text-stone-100 dark:bg-slate-900 select-none">
      <Layout header={() => <Header class="" />} class="gap-0.5">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/link" component={Link} />
        </Router>
      </Layout>
    </div>
  );
}
