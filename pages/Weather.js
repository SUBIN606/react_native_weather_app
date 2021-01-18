import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypse from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#544a7d", "#ffd452"],
    title: "This is Title!",
    subtitle: "This is subTitle!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#274046", "#E6DADA"],
    title: "구름 가득 낀 하늘 ☁️",
    subtitle: "우중충하니까 맛있는걸 먹읍시다",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FDC830", "#F37335"],
    title: "햇볕은 쨍쨍, 모래알은 반짝 ☀️",
    subtitle: "견주는 산책을 나갑니다 실시",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#076585", "#fff"],
    title: "밖에 비온다 주륵주륵 ☔️",
    subtitle: "빗길 운전 조심 또 조심",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1D4350", "#A43931"],
    title: "번개 조심 ⚡️",
    subtitle: "바깥활동 자제하세요!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Drizzle은 뭘까요 스타벅스 드리즐 추가는 아는데..",
    subtitle: "흠냐뤼~",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "창 밖을 보라 창 밖을 보라 흰눈이 내린다 ☃️",
    subtitle: "눈길 운전 조심 또 조심",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4e54c8", "#8f94fb"],
    title: "마스크를 낍시다 모두들",
    subtitle: "Who Want the Smoke?",
  },
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#757f9a", "d7dde8"],
    title: "몰라 배고파",
    subtitle: "맛있는거 먹으세요.",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "안개가 꼈읍니다🌫",
    subtitle: "전방 주시 안전거리 확보",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#abbaab", "#ffffff"],
    title: "배고픈데?",
    subtitle: "오늘 점심은 쌀국수 🍜",
  },
};

const getAirCondition = (pm2_5) => {
  if (pm2_5 < 16) {
    return (
      <Text style={styles.air}>
        미세먼지 좋음{" "}
        <MaterialCommunityIcons name="emoticon-excited-outline" size={20} />
      </Text>
    );
  } else if (pm2_5 > 15 && pm2_5 < 36) {
    return (
      <Text style={styles.air}>
        미세먼지 보통{" "}
        <MaterialCommunityIcons name="emoticon-happy-outline" size={20} />
      </Text>
    );
  } else if (pm2_5 > 35 && pm2_5 < 76) {
    return (
      <Text style={styles.air}>
        미세먼지 나쁨{" "}
        <MaterialCommunityIcons name="emoticon-frown-outline" size={20} />
      </Text>
    );
  } else if (pm2_5 > 75) {
    return (
      <Text style={styles.air}>
        미세먼지 매우나쁨{" "}
        <MaterialCommunityIcons name="emoticon-angry-outline" size={20} />
      </Text>
    );
  } else {
    return (
      <Text style={styles.air}>
        미세먼지 측정중{" "}
        <MaterialCommunityIcons name="emoticon-wink-outline" size={20} />
      </Text>
    );
  }
};

function Weather({ temp, condition, air }) {
  console.log("Weather.js : ", Math.round(air.components.pm2_5));
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <Text style={styles.condition}>{condition}</Text>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />

        <Text style={styles.temp}>{temp}º</Text>

        {getAirCondition(air.components.pm2_5)}
      </View>

      <View style={{ ...styles.halfContainer, ...styles.textWrap }}>
        <Text textBreakStrategy={"simple"} style={styles.title}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypse.number.isRequired,
  condition: PropTypse.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Fog",
    "Dust",
  ]).isRequired,
  air: PropTypse.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  condition: {
    fontSize: 20,
    color: "white",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 26,
  },
  textWrap: {
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  air: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
});
export default Weather;
