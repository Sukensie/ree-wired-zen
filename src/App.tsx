import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WaitlistProvider } from "@/contexts/WaitlistContext";
import Index from "./pages/Index.tsx";
import Login from "./pages/Login.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import UserDashboard from "./pages/UserDashboard.tsx";
import PartnerDashboard from "./pages/PartnerDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToHash from "@/components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WaitlistProvider>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/partner" element={<PartnerDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WaitlistProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
