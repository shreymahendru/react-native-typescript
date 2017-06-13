import { StackNavigator, NavigationContainer } from "react-navigation";

import { FirstScreen } from "./first-screen";
import { AppRegistry } from "react-native";
import { SecondScreen } from "./second-screen";

const SimpleApp: NavigationContainer = StackNavigator({
    First: { screen: FirstScreen },
    Second: {screen: SecondScreen}
});

AppRegistry.registerComponent("typescriptProject", () => SimpleApp);