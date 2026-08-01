export type SeasonId = "봄" | "여름" | "가을" | "겨울";

export type Season = {
  id: SeasonId;
  hanja: string;
  color: "spring" | "summer" | "autumn" | "winter";
  order: number;
};

export const seasons: Season[] = [
  { id: "봄", hanja: "春", color: "spring", order: 0 },
  { id: "여름", hanja: "夏", color: "summer", order: 1 },
  { id: "가을", hanja: "秋", color: "autumn", order: 2 },
  { id: "겨울", hanja: "冬", color: "winter", order: 3 },
];

export function getSeason(id: string): Season | undefined {
  const decoded = decodeURIComponent(id);
  return seasons.find((s) => s.id === decoded);
}
