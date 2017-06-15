import { StackNavigator, NavigationContainer } from "react-navigation";
import { AppRegistry } from "react-native";

import { FirstScreen } from "./screens/first-screen";
import { SecondScreen } from "./screens/second-screen";

const SimpleApp: NavigationContainer = StackNavigator({
    First: { screen: FirstScreen },
    Second: {screen: SecondScreen}
});

AppRegistry.registerComponent("typescriptProject", () => SimpleApp);