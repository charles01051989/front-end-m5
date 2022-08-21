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
import { GameResponse } from "types/api/game";
import { FavoriteItemType } from "types/FavoriteItemType";
import { useEffect, useState } from "react";
import { GameService } from "services/GameService";
import { QueryKey } from "types/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { GenreService } from "services/GenreService";
import { Auth } from "helpers/Auth";
import { matchByText } from "helpers/Utils";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATETIME_SHORT,
    weekday: "long",
  });
  const [favorites, setFavorites] = useState<FavoriteItemType[]>([]);

  const navigate = useNavigate();

  const { data: gamesData } = useQuery([QueryKey.GAMES], GameService.getLista);
  const { data: genresData } = useQuery(
    [QueryKey.GENRES],
    GenreService.getLista
  );

  const genres = genresData || [];

  const [games, setGames] = useState<GameResponse[]>([]);

  const [filteredGames, setFilteredGames] = useState<GameResponse[]>([]);

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (game: GameResponse) => {
    const existing = favorites.find((i) => i.game.id === game.id);
    const item: FavoriteItemType = { game };

    const list = existing
      ? favorites.map((i) => (i.game.id === existing.game.id ? item : i))
      : [...favorites, item];
    setFavorites(list);
  };
  const handleRemoveFavoriteItem = (id: string) => {
    const filtered = favorites.filter((i) => i.game.id !== id);
    setFavorites(filtered);
  };

  const handleFilter = ( title: string ) => {
    const list = games.filter(({ name }) => matchByText( name, title ));
    setFilteredGames(list);
  }

  useEffect(() => {
    setGames(gamesData || []);
    setFilteredGames(gamesData || []);
  }, [gamesData]);

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={Auth.logout}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>90's Games</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input 
                type="text" 
                placeholder="Procure pelo nome do game"
                onChange={({target}) => handleFilter(target.value)} />
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
                filteredGames.map((game, index) => (
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
        <FavoriteDetails
          favorites={favorites}
          onRemoveItem={handleRemoveFavoriteItem}
        />
      </aside>
      {/* <Overlay>

      </Overlay> */}
    </S.Home>
  );
};

export default Home;
