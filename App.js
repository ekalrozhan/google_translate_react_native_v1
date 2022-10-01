import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="main"
              component={HomeScreen}
              options={{
                headerTitle: "Translate",
                headerTitleAlign: "center",
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
