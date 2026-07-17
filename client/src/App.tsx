import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import MobHog from "@/pages/mobhog";
import MobHogPrivacy from "@/pages/mobhog-privacy";
import WaddlePlay from "@/pages/waddleplay";
import KidsCharades from "@/pages/kids-charades";
import KidsCharadesPrivacy from "@/pages/kids-charades-privacy";

function Router() {
  return (
    <Switch>
      <Route path="/apps/privacy" component={Privacy} />
      <Route path="/apps/prvicay" component={Privacy} />
      <Route path="/app/privacy" component={Privacy} />
      <Route path="/app/mobhog" component={MobHog} />
      <Route path="/app/mobhog/privacy-policy" component={MobHogPrivacy} />
      <Route path="/app/waddleplay" component={WaddlePlay} />
      <Route path="/app/kids-charades" component={KidsCharades} />
      <Route path="/app/kids-charades/privacy-policy" component={KidsCharadesPrivacy} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
