import { Button } from "@/components/ui/button";
import { Bed, AlarmClock } from "lucide-react";
import type { CalculationMode } from "@/pages/sleep-calculator";

interface ModeSelectorProps {
  mode: CalculationMode;
  onModeChange: (mode: CalculationMode) => void;
}

export function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="bg-card rounded-xl p-6 mb-8 border border-border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">اختر نوع الحساب</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Button
          variant={mode === "sleep-now" ? "default" : "outline"}
          className={`mode-btn p-6 h-auto justify-start ${
            mode === "sleep-now" 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground border-primary" 
              : "bg-muted hover:bg-muted/80 text-muted-foreground border-border"
          }`}
          onClick={() => onModeChange("sleep-now")}
        >
          <div className="flex items-center space-x-3 space-x-reverse">
            <Bed className="h-6 w-6" />
            <div className="text-right">
              <div className="font-semibold">سأنام الآن</div>
              <div className="text-sm opacity-90">احسب أوقات الاستيقاظ المثالية</div>
            </div>
          </div>
        </Button>
        
        <Button
          variant={mode === "wake-at" ? "default" : "outline"}
          className={`mode-btn p-6 h-auto justify-start ${
            mode === "wake-at" 
              ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary" 
              : "bg-muted hover:bg-muted/80 text-muted-foreground border-border"
          }`}
          onClick={() => onModeChange("wake-at")}
        >
          <div className="flex items-center space-x-3 space-x-reverse">
            <AlarmClock className="h-6 w-6" />
            <div className="text-right">
              <div className="font-semibold">أريد الاستيقاظ في وقت محدد</div>
              <div className="text-sm opacity-90">احسب متى يجب أن أنام</div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
