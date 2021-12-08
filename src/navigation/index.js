import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  DetailScreen,
  ProfileScreen,
  StreamScreen,
} from '../screens';
import {screenName} from '../utils/constants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {createNavigationContainerRef} from '@react-navigation/native';
import {COLORS} from '../themes/styles';
import {View, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) navigationRef.navigate(name, params);
};

const screenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: COLORS.lightBack,
      borderTopColor: COLORS.lightBack,
    },
    tabBarIcon: ({focused}) => {
      let iconName;
      const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
      switch (route.name) {
        case screenName.HomeTab:
          iconName = 'home';
          break;
        case screenName.stream:
          iconName = 'game-controller';
          break;
        default:
          iconName = 'user';
          break;
      }
      return (
        <View style={[styles.tabItem, {backgroundColor}]}>
          <EntypoIcon name={iconName} color={COLORS.white} size={22} />
        </View>
      );
    },
  };
};

const RootTab = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name={screenName.HomeTab} component={HomeScreen} />
    <Tab.Screen name={screenName.stream} component={StreamScreen} />
    <Tab.Screen name={screenName.profile} component={ProfileScreen} />
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: 'modal',
    }}>
    <Stack.Screen name={screenName.home} component={RootTab} />
    <Stack.Screen name={screenName.detail} component={DetailScreen} />
  </Stack.Navigator>
);

export default RootNavigation = () => {
  return <RootStack />;
};

const styles = StyleSheet.create({
  tabItem: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
