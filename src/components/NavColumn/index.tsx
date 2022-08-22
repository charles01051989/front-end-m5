import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { HTMLAttributes } from "react";
import NavColumnItem from "components/NavColumnItem";
import { useNavigate } from "react-router-dom";

type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {
  const navigate = useNavigate();
  const items = [
    {
      icon: <Market />,
      title: "Gerenciar Gêneros",
      subtitle: "Adicione, edite e remova gêneros",
      navigation: RoutePath.SETTINGS_GENRES,
    },
    {
      icon: <Info />,
      title: "Gerenciar Games",
      subtitle: "Adicione, edite e remova games.",
      navigation: RoutePath.SETTINGS_GAMES,
    },
    {
      icon: <Users />,
      title: "Gerenciar Usuários",
      subtitle: "Gerencie o acesso ao sistema",
      navigation: RoutePath.SETTINGS_USERS,
    },
  ];
  return (
    <S.NavColumn>
      {items.map((item, key) => (
        <NavColumnItem
          onClick={ () => navigate(item.navigation) }
          active={item.navigation === activeRoute}
          icon={item.icon}
          title={item.title}
          key={key}
          subtitle={item.subtitle}
        />
      ))}
    </S.NavColumn>
  );
};

export default NavColumn;
