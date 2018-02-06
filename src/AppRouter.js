
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import RedditPostsList from './containers/redditPostsContainer/redditPostsListContainer';
import ItemContainer from './containers/ItemContainer/ItemContainer';


const AppRouter = StackNavigator(
	{
		RedditPostsList: { screen: RedditPostsList },
		ItemContainer: { screen: ItemContainer }
	},
	{
		initialRouteName: "RedditPostsList",
		headerMode: "none",
	}
);

export default () => (
		<AppRouter />
);
