import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_900Black } from "@expo-google-fonts/roboto";

const { width, height } = Dimensions.get("window");


const customFonts = () => {
    let [fontsLoaded] = useFonts({
        Roboto: require('plusbabygirl/src/assets/fonts/Roboto-Regular.ttf'),
        Roboto_Black: require('plusbabygirl/src/assets/fonts/Roboto-Black.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
}

export const colours = {
    softPink: "#FFEDF4",
    hotPink: "#FF4597",
    defaultPink: "#FFCBDE",
    warmPink: "#FEB1CE",
    white: "#fff",
    whitePink: '#FFFBFC',
    black: "#00151A",
    blue: "#470099",
    lightGrey: "#969696",

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const sizes = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const fonts = {
    
    largeTitle: { fontFamily: "Roboto_Black", fontSize: sizes.largeTitle },
    h1: { fontFamily: "Roboto_Black", fontSize: sizes.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto_Bold", fontSize: sizes.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto_Bold", fontSize: sizes.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto_Bold", fontSize: sizes.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto_Regular", fontSize: sizes.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto_Regular", fontSize: sizes.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto_Regular", fontSize: sizes.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto_Regular", fontSize: sizes.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto_Regular", fontSize: sizes.body5, lineHeight: 22 },
};

const appTheme = { colours, sizes, fonts };

export default appTheme;