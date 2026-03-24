const API_BASE_URL = 'http://localhost:5197';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetchData<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const config: FetchOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
}

// Bowler API
export interface Bowler {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamName: string;
}

export async function getBowlers(): Promise<Bowler[]> {
  return fetchData<Bowler[]>('/bowlers');
}

// Weather Forecast API (legacy)
export async function getWeatherForecast(): Promise<WeatherForecast[]> {
  return fetchData<WeatherForecast[]>('/WeatherForecast');
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
