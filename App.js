import { StyleSheet, Text, View } from "react-native";
import ContactsScreen from "./Screens/ContactsScreens";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { QueryClient, QueryClientProvider } from "react-query";
import LogInScreenWithEmail from "./Screens/LogInScreenWithEmail";
import CreateAccountScreenWithEmail from "./Screens/CreateAccountScreenWithEmail";
import LogInScreenWithPhoneNumber from "./Screens/LoginWithPhoneNumber";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <LogInScreenWithEmail />
        </View>
      </QueryClientProvider>
    </Provider>
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
