import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlarmClock, Calculator } from "lucide-react";
import { calculateSleepTimes, formatTimeArabic } from "@/lib/sleep-calculations";
import type { SleepResult } from "@/pages/sleep-calculator";

interface WakeAtCalculatorProps {
  onResults: (results: SleepResult[], title: string) => void;
}

export function WakeAtCalculator({ onResults }: WakeAtCalculatorProps) {
  const [wakeTime, setWakeTime] = useState("");

  const handleCalculate = () => {
    if (!wakeTime) {
      alert("يرجى إدخال وقت الاستيقاظ المطلوب");
      return;
    }

    const results = calculateSleepTimes(wakeTime);
    const title = `أوقات النوم المثالية للاستيقاظ الساعة ${formatTimeArabic(wakeTime)}`;
    onResults(results, title);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center space-x-2 space-x-reverse">
        <AlarmClock className="text-secondary w-5 h-5" />
        <span>أريد الاستيقاظ في وقت محدد</span>
      </h3>
      
      <div className="mb-6">
        <Label htmlFor="wake-time" className="block text-sm font-medium text-muted-foreground mb-2">
          وقت الاستيقاظ المطلوب
        </Label>
        <Input
          id="wake-time"
          type="time"
          value={wakeTime}
          onChange={(e) => setWakeTime(e.target.value)}
          className="bg-input border-border text-foreground focus:ring-secondary focus:border-secondary w-full md:w-auto"
        />
      </div>
      
      <Button 
        onClick={handleCalculate}
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3"
      >
        <Calculator className="w-4 h-4 ml-2" />
        احسب أوقات النوم المثالية
      </Button>
    </div>
  );
}
