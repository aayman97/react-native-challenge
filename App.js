import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { QueryClient, QueryClientProvider } from "react-query";
import WholeApp from "./Navigation/NavigationForTheApp";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WholeApp />
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
