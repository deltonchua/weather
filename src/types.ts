export interface Weather {
  q: string;
  coord: { lon: number; lat: number };
  weather: [{ main: string }];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  clouds: { all: number };
  time: number;
  timezone: number;
}

export interface History {
  q: string;
  timestamp: number;
}

export interface Toast {
  timestamp: number;
  type: 'info' | 'error';
  message: string;
}
