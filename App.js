import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

import Loading from "./pages/Loading";
import Weather from "./pages/Weather";

const API_KEY = "yourAPI_KEY";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [air, setAir] = useState({});

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const {
      data: { list },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log("air = ", list[0]);
    setAir(list[0]);
    setTemp(temp);
    setCondition(weather[0].main);
    setIsLoading(false);
    console.log("condition: ", weather[0].main);
  };

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} air={air} />
  );
}
