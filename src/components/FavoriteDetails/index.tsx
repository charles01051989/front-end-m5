import * as S from "./style";
import FavoriteItemList from "components/FavoriteItemList";
import FavoriteItem from "components/FavoriteItem";
import { HTMLAttributes } from "react";
import { FavoriteItemType } from "types/FavoriteItemType";

type FavoriteDetailsType = HTMLAttributes<HTMLDivElement>;

type FavoiteDetailsProps = {
  favorites: FavoriteItemType[];
  onRemoveItem:(id: string) => void
} & FavoriteDetailsType;

const FavoriteDetails = ({ favorites, onRemoveItem }: FavoiteDetailsProps ) => {
  return (
    <S.FavoriteDetails>
      <S.FavoriteDetailsTitle>Detalhes dos favoritos</S.FavoriteDetailsTitle>
      <S.FavoriteDetailsButtonGroup></S.FavoriteDetailsButtonGroup>
      <S.FavoriteDetailsList>
        <FavoriteItemList
          header={
            <S.FavoriteDetailsListTitle>
              <h4>Game</h4>
              {/* <h4>Qtd</h4> */}
              <h4>Ano</h4>
            </S.FavoriteDetailsListTitle>
          }
          list = {
            Boolean(favorites.length) ? (favorites.map((item, index) => (
              <FavoriteItem
                onRemoveItem={() => onRemoveItem(item.game.id) }
                game={item.game}
                observation={item.observation}
                key={`FavoriteDetails-${index}`}              />
            ))
            ):(<S.FavoriteDetailsListGap/>)
          }
          footer={
            <S.FavoriteDetailsListFooter>
              <S.FavoriteDetailsListFooterRow>
                {/* <span>Subtotal</span>
                <span>R$ 10.00</span> */}
              </S.FavoriteDetailsListFooterRow>
            </S.FavoriteDetailsListFooter>
            }
        />
      </S.FavoriteDetailsList>
    </S.FavoriteDetails>
  );
};

export default FavoriteDetails;
