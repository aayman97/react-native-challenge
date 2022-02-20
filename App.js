
import { StyleSheet, Text, View } from 'react-native';
import ContactsScreen from './Screens/ContactsScreens';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <ContactsScreen/>
    </View>
    </QueryClientProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
