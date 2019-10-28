import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";
import { MaterialHeaderButtons, Item } from "./MyHeaderButtons";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello moto</Text>
//     </View>
//   );
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <MaterialHeaderButtons>
        <Item
          title="add"
          iconName="search"
          onPress={() => console.warn("add")}
        />
        <Item title="edit" onPress={() => console.warn("edit")} />
      </MaterialHeaderButtons>
    ),
    headerRight: () => (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="#fff"
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go To Details"
          onPress={() => {
            this.props.navigation.navigate("Details"),
              {
                itemID: "86",
                otherParam: "anything you want here"
              };
          }}
        ></Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : "A Nested Details Screen",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam("itemId", "NO-ID"))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam("otherParam", "default value"))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated" })
          }
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// export default createStackNavigator({
//   Inbox: InboxScreen
//   Drafts: DraftsScreen,
// }, {
//   initialRouteName: 'Inbox',
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
