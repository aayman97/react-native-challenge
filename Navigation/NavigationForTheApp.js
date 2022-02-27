import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsScreens from "../Screens/ContactsScreens";
import CreateAccountScreenWithEmail from "../Screens/CreateAccountScreenWithEmail";

import LoginScreen from "../Screens/LoginScreen";
import LogInScreenWithEmail from "../Screens/LogInScreenWithEmail";
import LogInScreenWithPhoneNumber from "../Screens/LoginWithPhoneNumber";

const Stack = createNativeStackNavigator();

const WholeApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen
          name="Sign In with Email"
          component={LogInScreenWithEmail}
        />
        <Stack.Screen
          name="Sign In with Phone"
          component={LogInScreenWithPhoneNumber}
        />
        <Stack.Screen
          name="Create An Account"
          component={CreateAccountScreenWithEmail}
        />
        <Stack.Screen
          name="Phone Contacts"
          component={ContactsScreens}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WholeApp;
