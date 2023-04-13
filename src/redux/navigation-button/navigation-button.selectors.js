import { createSelector } from "reselect";

const selectNavigation = ({ navigation}) => navigation;


export const selectIsToggle = createSelector(
    [selectNavigation],
    ({ isToggle }) => isToggle 
);

