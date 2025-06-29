import { useState } from "react";
import { ModeSelector } from "@/components/sleep-calculator/mode-selector";
import { SleepNowCalculator } from "@/components/sleep-calculator/sleep-now-calculator";
import { WakeAtCalculator } from "@/components/sleep-calculator/wake-at-calculator";
import { ResultsDisplay } from "@/components/sleep-calculator/results-display";
import { HealthInfoSidebar } from "@/components/sleep-calculator/health-info-sidebar";
import { LiveClock } from "@/components/sleep-calculator/live-clock";
import { Moon } from "lucide-react";

export type CalculationMode = "sleep-now" | "wake-at";

export interface SleepResult {
  time: string;
  cycles: number;
  hours: number;
}

export default function SleepCalculator() {
  const [mode, setMode] = useState<CalculationMode>("sleep-now");
  const [results, setResults] = useState<SleepResult[]>([]);
  const [resultsTitle, setResultsTitle] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleResults = (newResults: SleepResult[], title: string) => {
    setResults(newResults);
    setResultsTitle(title);
    setShowResults(true);
    
    // Smooth scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById("results-section");
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleModeChange = (newMode: CalculationMode) => {
    setMode(newMode);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-primary p-2 rounded-lg">
                <Moon className="text-primary-foreground text-xl w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">حاسبة النوم الذكي</h1>
            </div>
            <LiveClock />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Calculator Section */}
          <div className="lg:col-span-2">
            <ModeSelector mode={mode} onModeChange={handleModeChange} />
            
            <div className="bg-card rounded-xl p-6 border border-border">
              {mode === "sleep-now" ? (
                <SleepNowCalculator onResults={handleResults} />
              ) : (
                <WakeAtCalculator onResults={handleResults} />
              )}
            </div>

            {showResults && (
              <ResultsDisplay
                results={results}
                title={resultsTitle}
                mode={mode}
              />
            )}
          </div>

          {/* Health Information Sidebar */}
          <div className="lg:col-span-1">
            <HealthInfoSidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <span className="text-red-500">♥</span>
              <span>حاسبة النوم الذكي - نوم صحي لحياة أفضل</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 space-x-reverse">
              <a
                href="https://ibrahimmustafacv.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                للمزيد من المشاريع
              </a>
              <a
                href="https://ibrahimmustafacv.github.io/my-social-media-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                تابعنا هنا
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
