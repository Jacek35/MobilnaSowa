import {createStackNavigator} from "react-navigation";
import AuthComponent from "./src/components/AuthComponent/AuthComponent";
import SecondView from "./src/components/secondview";
import SearchComponent from "./src/components/SearchComponent";
import HomeComponent from "./src/components/HomeComponent/HomeComponent";
import Profile from "./src/components/ProfileView/ProfileComponent";

const RootStack = createStackNavigator({
        Home: { screen: HomeComponent },
        Auth: { screen: AuthComponent },
        SearchComponent: { screen: SearchComponent },
        PaymentInfo: {screen: Profile}//Nazwy sa do zmiany :D
    },
    {
        initialRouteName: 'Home'
    });

export default RootStack;