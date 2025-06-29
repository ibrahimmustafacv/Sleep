import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted px-4 py-2 rounded-lg">
      <div className="flex items-center space-x-2 space-x-reverse text-secondary">
        <Clock className="w-4 h-4" />
        <span className="font-mono text-lg font-semibold">{time}</span>
      </div>
    </div>
  );
}
