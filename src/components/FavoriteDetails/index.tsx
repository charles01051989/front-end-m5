import * as S from "./style";
import FavoriteItemList from "components/FavoriteItemList";
import FavoriteItem from "components/FavoriteItem";

const FavoriteDetails = () => {
  return (
    <S.FavoriteDetails>
      <S.FavoriteDetailsTitle>Detalhes dos favoritos</S.FavoriteDetailsTitle>
      <S.FavoriteDetailsButtonGroup></S.FavoriteDetailsButtonGroup>
      <S.FavoriteDetailsList>
        <FavoriteItemList
          header={
            <S.FavoriteDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.FavoriteDetailsListTitle>
          }
          list = {<FavoriteItem/>}
          footer={
            <S.FavoriteDetailsListFooter>
              <S.FavoriteDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ 10.00</span>
              </S.FavoriteDetailsListFooterRow>
            </S.FavoriteDetailsListFooter>
            }
        />
      </S.FavoriteDetailsList>
    </S.FavoriteDetails>
  );
};

export default FavoriteDetails;
