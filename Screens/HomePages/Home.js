import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacityBase } from "react-native";
import PostScreen from "../MainPages/PostsScreen";
import CreatePostsScreen from "../MainPages/CreatePostScreen";
import ProfileScreen from "../MainPages/ProfileScreen";
import SvgLogOut from "../../assets/svg/SvgLogOut";
import SvgArrowLeft from "../../assets/svg/SvgArrowLeft";

import SvgGrid from "../../assets/svg/SvgGrid";
import SvgPlus from "../../assets/svg/SvgPlus";
import SvgUser from "../../assets/svg/SvgUser";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 64,
          paddingTop: 10,
          paddingBottom: 20,

          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#ff6c00",
        inactiveTintColor: "#212121",
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={({ navigation }) => ({
          ...postsOptions,

          headerRight: () => (
            <SvgLogOut
              onPress={() => navigation.navigate("Login")}
              title="Return back"
              color="#fff"
              style={styles.logOut}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacityBase {...props} style={styles.btnTab} />
          ),
          tabBarIcon: ({ color }) => {
            return <SvgGrid stroke={color} />;
          },
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation, route }) => ({
          ...createPostsOptions,
          headerLeft: () => (
            <SvgArrowLeft
              onPress={() => {
                navigation.navigate("Posts");
              }}
              title="Return back"
              color="#fff"
              style={styles.arrowLeft}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                ...styles.btnTab,
                backgroundColor: "#ff6c00",
              }}
            />
          ),
          tabBarIcon: () => {
            return <SvgPlus fill={"#ffffff"} />;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          ...createPostsOptions,
          headerLeft: () => (
            <SvgArrowLeft
              onPress={() => navigation.navigate("Posts")}
              title="Return back"
              color="#fff"
              style={styles.arrowLeft}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                ...styles.btnTab,
                marginRight: 0,
              }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => {
            return <SvgUser size={size} fill={color} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  arrowLeft: {
    marginLeft: 16,
    marginRight: 42,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logOut: {
    width: 24,
    height: 24,
    marginRight: 60,
    marginRight: 16,

    paddingVertical: 10,
  },
  btnTab: {
    alignSelf: "center",
    marginRight: 30,
    width: 40,
    height: 40,

    paddingVertical: 8,
    paddingHorizontal: 8,

    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
});

const createPostsOptions = {
  title: "Створити публікацію",
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,

    textAlign: "center",
  },
};

const postsOptions = {
  title: "Публікації",
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,

    marginLeft: 120,

    textAlign: "center",
  },
};
