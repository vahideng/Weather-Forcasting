import * as actionTypes from "./actionTypes";
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
const API_KEY = "edee7940702be0de536bec39d7ddebc2";
//https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22

//api.openweathermap.org/data/2.5/forecast?q
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const request = axios.get(`${BASE_URL}&q=${city},Iran`);
  console.log(request, "request");
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
