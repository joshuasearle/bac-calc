export type gender = 'male' | 'female' | 'other';
export interface time {
  hours: number;
  minutes: number;
}

export interface bacDataPoint {
  time: string;
  bac: number;
}

export type bacData = null | bacDataPoint[];
