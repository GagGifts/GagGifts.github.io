import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import ShopPage from "./pages/shop/shoppage.component";
import CheckOut from "./pages/checkout/check-out.component";
import HomePage from "./pages/homepage/homepage.component";

import SignInAndSignUp from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component";
import Header from "./components/header/header.component";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={CheckOut} />
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
