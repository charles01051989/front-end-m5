import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import GameItemList from "components/GameItemList";
import GameItem from "components/GameItem";
import FavoriteDetails from "components/FavoriteDetails";
import Overlay from "components/Overlay";
import { useNavigate } from "react-router-dom";
import { GameResponse } from "types/Game";
import { games } from "mocks/games";
import { FavoriteItemType } from "types/FavoriteItemType";
import { useState } from "react";
// import { favorites } from "mocks/favorites";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATETIME_SHORT,
    weekday: "long",
  });
  const [favorites, setFavorites] = useState<FavoriteItemType[]>([]);
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (game: GameResponse) => {
    const existing = favorites.find((i) => i.game.id === game.id);
    const item: FavoriteItemType = {game}

    const list = existing ? favorites.map((i) => (i.game.id === existing.game.id ? item: i))
    : [...favorites, item];
    setFavorites(list)
  };

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Best Games</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo nome do game" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeGameTitle>
            <b>Games</b>
          </S.HomeGameTitle>
          <S.HomeGameList>
            <GameItemList>
              {Boolean(games.length) &&
                games.map((game, index) => (
                  <GameItem
                    game={game}
                    key={`GameItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </GameItemList>
          </S.HomeGameList>
        </div>
      </S.HomeContent>
      <aside>
        <FavoriteDetails favorites={favorites} />
      </aside>
      {/* <Overlay>

      </Overlay> */}
    </S.Home>
  );
};

export default Home;
