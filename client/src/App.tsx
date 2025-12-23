/**
 * App.tsx - Main Application Entry Point
 *
 * North Karakoram Adventure Tourism Website
 * This file configures the React application with routing, state management,
 * and global UI providers for the adventure tourism platform.
 */

import { ContentProtection } from "@/components/ContentProtection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PageLoader } from "@/components/PageLoader";
import { WelcomePopup } from "@/components/WelcomePopup";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

// Page imports - each represents a main section of the website
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ExpeditionDetail from "@/pages/ExpeditionDetail";
import Expeditions from "@/pages/Expeditions";
import Home from "@/pages/Home";
import MountaineeringRules from "@/pages/MountaineeringRules";
import PakistanVisa from "@/pages/PakistanVisa";
import PaymentMethod from "@/pages/PaymentMethod";
import PeakRoyalty from "@/pages/PeakRoyalty";
import Team from "@/pages/Team";
import Tours from "@/pages/Tours";
import TravelInfo from "@/pages/TravelInfo";
import Trekking from "@/pages/Trekking";
import TripDetail from "@/pages/TripDetail";
import NotFound from "@/pages/not-found";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import RockClimbing from "./pages/RockClimbing";

function Router() {
  return (
    <Switch>
      {/* Main landing page */}
      <Route path="/" component={Home} />
      {/* Trip category pages */}
      <Route path="/expeditions" component={Expeditions} />
      <Route path="/expedition/:slug" component={ExpeditionDetail} />
      <Route path="/trekking" component={Trekking} />
      <Route path="/rock-climbing" component={RockClimbing} />
      <Route path="/tours" component={Tours} />
      {/* Information pages */}
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/travel-info" component={TravelInfo} />
      <Route path="/mountaineering-rules" component={MountaineeringRules} />
      {/* <Route path="/mountains" component={Mountains} /> */}
      <Route path="/peak-royalty" component={PeakRoyalty} />
      <Route path="/contact" component={Contact} />
      <Route path="/pakistan-visa" component={PakistanVisa} />
      <Route path="/payment-method" component={PaymentMethod} />
      <Route path="/trip/:id" component={TripDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <PageLoader />
        <Navigation />
        <Router />
        <Footer />
        <FloatingButtons />
        {/* <ContentProtection /> */}
        <WelcomePopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
