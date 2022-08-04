import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";

const Home = () => {
  return (
    <S.Home>
      <Menu/>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Best Games</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Aqui ficará a data
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo nome do game" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos aqui</p>
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
