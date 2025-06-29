import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Moon, Clock, Calculator } from "lucide-react";
import { calculateWakeTimes, formatTimeArabic, getCurrentTime } from "@/lib/sleep-calculations";
import type { SleepResult } from "@/pages/sleep-calculator";

interface SleepNowCalculatorProps {
  onResults: (results: SleepResult[], title: string) => void;
}

export function SleepNowCalculator({ onResults }: SleepNowCalculatorProps) {
  const [sleepTime, setSleepTime] = useState("");

  const handleUseCurrentTime = () => {
    setSleepTime(getCurrentTime());
  };

  const handleCalculate = () => {
    if (!sleepTime) {
      alert("يرجى إدخال وقت النوم");
      return;
    }

    const results = calculateWakeTimes(sleepTime);
    const title = `أوقات الاستيقاظ المثالية لو نمت الساعة ${formatTimeArabic(sleepTime)}`;
    onResults(results, title);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center space-x-2 space-x-reverse">
        <Moon className="text-primary w-5 h-5" />
        <span>سأنام الآن - احسب أوقات الاستيقاظ المثالية</span>
      </h3>
      
      <div className="mb-6">
        <Label htmlFor="sleep-time" className="block text-sm font-medium text-muted-foreground mb-2">
          وقت النوم
        </Label>
        <div className="flex space-x-3 space-x-reverse">
          <Button 
            onClick={handleUseCurrentTime}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Clock className="w-4 h-4 ml-2" />
            استخدم الوقت الحالي
          </Button>
          <Input
            id="sleep-time"
            type="time"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
            className="bg-input border-border text-foreground focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      
      <Button 
        onClick={handleCalculate}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
      >
        <Calculator className="w-4 h-4 ml-2" />
        احسب أوقات الاستيقاظ المثالية
      </Button>
    </div>
  );
}
