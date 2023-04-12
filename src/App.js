import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsToggle } from "./redux/navigation-button/navigation-button.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component"

import SignInAndSignUp from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component";
import Header from "./components/header/header.component";
import NavigationButton from "./components/navitation-button/navigation-button.component";
import NavigationSideBar from "./components/navigation-sidebar/navigation-sidebar.component"
import { NavigationSideBarContainer } from "./App.styles" 
import "./App.css"


const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

	const isToggle = useSelector(selectIsToggle);
    return (
        <div className="App">
            <Header />
			<NavigationButton/>
			<NavigationSideBarContainer isToggle={isToggle}>
				<NavigationSideBar/>
			</NavigationSideBarContainer>
            <Switch>
                <Route exact path="/" component={HomePage} />
		        <Route path="/shop" component={ShopPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
