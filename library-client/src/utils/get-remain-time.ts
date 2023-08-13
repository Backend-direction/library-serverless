export const getRemainTime = (endDate: string, formatter: (days: number, hours: number, minutes: number) => string): string => {
  const date = new Date(endDate);
  const now = new Date();

  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const days = Math.abs(Math.floor(diff / 86400));
  const hours = Math.abs(Math.floor((diff % 86400) / 3600));
  const minutes = Math.abs(Math.floor((diff % 3600) / 60));

  return formatter(days, hours, minutes);
} 