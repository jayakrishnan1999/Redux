import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Details from './src/redux/Details';
import Home from './src/redux/Home';
import user from './src/redux/user';
import { store } from './src/redux/store'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Home}
            options={{ headerShown: false }} />
          <Stack.Screen
            name='detail'
            component={Details}
            options={{ headerShown: false }} />
          <Stack.Screen
            name='data'
            component={user}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}