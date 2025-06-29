import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Sun, Moon, Info } from "lucide-react";
import { formatTimeArabic } from "@/lib/sleep-calculations";
import type { SleepResult, CalculationMode } from "@/pages/sleep-calculator";

interface ResultsDisplayProps {
  results: SleepResult[];
  title: string;
  mode: CalculationMode;
}

interface TimeCardProps {
  result: SleepResult;
  mode: CalculationMode;
}

function TimeCard({ result, mode }: TimeCardProps) {
  const timeArabic = formatTimeArabic(result.time);
  const isWakeMode = mode === "sleep-now";
  const bgColor = isWakeMode ? "bg-primary/20 border-primary/30" : "bg-secondary/20 border-secondary/30";
  const iconColor = isWakeMode ? "text-primary" : "text-secondary";
  const Icon = isWakeMode ? Sun : Moon;

  return (
    <Card className={`time-card ${bgColor} border animate-slide-up`}>
      <CardContent className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">{timeArabic}</div>
        <div className={`text-sm ${isWakeMode ? "text-primary" : "text-secondary"}`}>
          {result.cycles} دورات نوم
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {result.hours} ساعة
        </div>
      </CardContent>
    </Card>
  );
}

export function ResultsDisplay({ results, title, mode }: ResultsDisplayProps) {
  return (
    <div id="results-section" className="mt-8 fade-in">
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center space-x-2 space-x-reverse">
            <Lightbulb className="text-yellow-500 w-5 h-5" />
            <span>{title}</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {results.map((result, index) => (
              <TimeCard key={index} result={result} mode={mode} />
            ))}
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground flex items-start space-x-2 space-x-reverse">
              <Info className="text-blue-400 w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                يتم احتساب دورات النوم بناءً على 90 دقيقة لكل دورة، مع إضافة 15-20 دقيقة للاستغراق في النوم
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
