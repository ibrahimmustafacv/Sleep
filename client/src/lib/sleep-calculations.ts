export interface SleepResult {
  time: string;
  cycles: number;
  hours: number;
}

// Helper function to add minutes to a time string
export function addMinutes(time: string, minutes: number): string {
  const date = new Date(`2000-01-01 ${time}`);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toTimeString().slice(0, 5);
}

// Helper function to subtract minutes from a time string
export function subtractMinutes(time: string, minutes: number): string {
  const date = new Date(`2000-01-01 ${time}`);
  date.setMinutes(date.getMinutes() - minutes);
  return date.toTimeString().slice(0, 5);
}

// Format time in Arabic 12-hour format
export function formatTimeArabic(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour24 = parseInt(hours);
  const hour12 = hour24 % 12 || 12;
  const period = hour24 < 12 ? 'ص' : 'م';
  return `${hour12}:${minutes} ${period}`;
}

// Get current time in HH:MM format
export function getCurrentTime(): string {
  const now = new Date();
  return now.toTimeString().slice(0, 5);
}

// Calculate optimal wake times based on sleep time
export function calculateWakeTimes(sleepTime: string): SleepResult[] {
  const fallAsleepTime = 20; // 20 minutes to fall asleep
  const cycleLength = 90; // 90 minutes per cycle
  
  const results: SleepResult[] = [];
  
  for (let cycles = 3; cycles <= 6; cycles++) {
    const totalMinutes = fallAsleepTime + (cycles * cycleLength);
    const wakeTime = addMinutes(sleepTime, totalMinutes);
    const hours = totalMinutes / 60;
    
    results.push({
      time: wakeTime,
      cycles,
      hours: Math.round(hours * 10) / 10 // Round to 1 decimal place
    });
  }
  
  return results;
}

// Calculate optimal sleep times based on wake time
export function calculateSleepTimes(wakeTime: string): SleepResult[] {
  const fallAsleepTime = 20; // 20 minutes to fall asleep
  const cycleLength = 90; // 90 minutes per cycle
  
  const results: SleepResult[] = [];
  
  for (let cycles = 6; cycles >= 3; cycles--) {
    const totalMinutes = fallAsleepTime + (cycles * cycleLength);
    const sleepTime = subtractMinutes(wakeTime, totalMinutes);
    const hours = totalMinutes / 60;
    
    results.push({
      time: sleepTime,
      cycles,
      hours: Math.round(hours * 10) / 10 // Round to 1 decimal place
    });
  }
  
  return results;
}
