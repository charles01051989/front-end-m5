import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg"

const FavoriteItem = () => {
  return (
    <S.FavoriteItem>
      <S.FavoriteItemLeft>
        <S.FavoriteItemLeftTop>
          <S.FavoriteItemGame>
            <S.FavoriteItemGameImage src="" alt="Game?..." />
            <S.FavoriteItemGameDetails>
              <S.FavoriteItemGameDetailsName>
                Nome do Game
              </S.FavoriteItemGameDetailsName>
              <S.FavoriteItemGameDetailsPrice>
                Preço do Game
              </S.FavoriteItemGameDetailsPrice>
            </S.FavoriteItemGameDetails>
          </S.FavoriteItemGame>
          {/* <S.FavoriteItemQuantity type="number" value="0" /> */}
        </S.FavoriteItemLeftTop>
      </S.FavoriteItemLeft>
      <S.FavoriteItemRight>
        <S.FavoriteItemRightTrash>
            <Trash/>
        </S.FavoriteItemRightTrash>
      </S.FavoriteItemRight>
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
