import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
=======
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
>>>>>>> fd159b82f21ac7bd217f5e6aabbae44f0cfc860b
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

<<<<<<< HEAD
export default App;
=======
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
>>>>>>> fd159b82f21ac7bd217f5e6aabbae44f0cfc860b
