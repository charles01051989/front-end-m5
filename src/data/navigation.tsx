import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { RoutePath } from "types/routes";
import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";

export const navigationItems: NavItem[] = [
	{
		icon: <Home />,
		path: RoutePath.HOME,
	},
	{
		icon: <Market />,
		path: RoutePath.SETTINGS_GENRES,
	},
	{
		icon: <Info />,
		path: RoutePath.SETTINGS_GAMES,
	},
	{
		icon: <Users />,
		path: RoutePath.SETTINGS_USERS,
	},
	
];