import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATETIME_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Best Games</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>{dateDescription}</S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo nome do game" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Games</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de games aqui</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos games aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
