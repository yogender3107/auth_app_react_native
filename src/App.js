import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  Header,
  Button,
  Spinner,
  CardSection,
  Card
} from "./components/common";
import LoginForm from "./components/LoginForm";
import reducers from "./reducers";
import LibraryList from "./components/LibraryListItems";

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCHR__2vZVJ16Sg3vINhN88G8X99z4qinU",
      authDomain: "auth-mobile-36f56.firebaseapp.com",
      databaseURL: "https://auth-mobile-36f56.firebaseio.com",
      projectId: "auth-mobile-36f56",
      storageBucket: "auth-mobile-36f56.appspot.com",
      messagingSenderId: "736609131352"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
            <LibraryList />
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

export default App;
