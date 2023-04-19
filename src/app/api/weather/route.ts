import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q) return NextResponse.json({ error: 'Not Found' });
  try {
    const weather = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${process.env.OPEN_WEATHER_API_KEY}`
      )
    ).data;
    return NextResponse.json({ ...weather, q, time: Date.now() });
  } catch (err) {
    const error = (err as AxiosError).message.includes('404')
      ? 'Location Not Found'
      : 'Server Error';
    return NextResponse.json({
      error,
    });
  }
}
