import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import NotFound from "@/pages/not-found";

// Page imports
import Ballina from "@/pages/Ballina";
import RrethNesh from "@/pages/RrethNesh";
import Historia from "@/pages/Historia";
import Klube from "@/pages/Klube";
import Lajme from "@/pages/Lajme";
import FAQ from "@/pages/FAQ";
import ClubDetail from "@/pages/ClubDetail";
import NewsDetail from "@/pages/NewsDetail";
import Biblioteka from "@/pages/Biblioteka";
import Kalendari from "@/pages/Kalendari";
import Materiale from "@/pages/Materiale";
import Orari from "@/pages/Orari";
import Kontakti from "@/pages/Kontakti";
import MaturaShtetrore from "@/pages/MaturaShtetrore";
import Portali from "@/pages/Portali";
import Rregullorja from "@/pages/Rregullorja";
import Senati from "@/pages/Senati";
import Pavaresia28Nentor from "@/pages/Pavaresia28Nentor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Ballina} />
      <Route path="/Ballina" component={Ballina} />
      <Route path="/RrethNesh" component={RrethNesh} />
      <Route path="/Historia" component={Historia} />
      <Route path="/Klube" component={Klube} />
      <Route path="/Lajme" component={Lajme} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/ClubDetail" component={ClubDetail} />
      <Route path="/NewsDetail" component={NewsDetail} />
      <Route path="/Biblioteka" component={Biblioteka} />
      <Route path="/Kalendari" component={Kalendari} />
      <Route path="/Materiale" component={Materiale} />
      <Route path="/Orari" component={Orari} />
      <Route path="/Kontakti" component={Kontakti} />
      <Route path="/MaturaShtetrore" component={MaturaShtetrore} />
      <Route path="/Portali" component={Portali} />
      <Route path="/Rregullorja" component={Rregullorja} />
      <Route path="/Senati" component={Senati} />
      <Route path="/Pavaresia28Nentor" component={Pavaresia28Nentor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
