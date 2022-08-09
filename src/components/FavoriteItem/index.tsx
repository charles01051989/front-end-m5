import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg"
import { ButtonHTMLAttributes, useState } from "react";
import { GameResponse } from "types/Game";

type DivType = ButtonHTMLAttributes<HTMLDivElement>

export type FavoriteItemProps = {
  game: GameResponse;
  observation?: string;
  onRemoveItem?: () => void;
}

const FavoriteItem = ({
  game,
  observation = "",
  onRemoveItem,
  ...props
}: FavoriteItemProps) => {
  return (
    <S.FavoriteItem {...props} role="listitem" >
      <S.FavoriteItemLeft>
        <S.FavoriteItemLeftTop>
          <S.FavoriteItemGame>
            <S.FavoriteItemGameImage src={game.image} alt={game.name} />
            <S.FavoriteItemGameDetails>
              <S.FavoriteItemGameDetailsName>
                {game.name}
              </S.FavoriteItemGameDetailsName>
              <S.FavoriteItemGameDetailsPrice>
                 {game.price}
              </S.FavoriteItemGameDetailsPrice>
            </S.FavoriteItemGameDetails>
          </S.FavoriteItemGame>
          {/* <S.FavoriteItemQuantity type="number" value="0" /> */}
        </S.FavoriteItemLeftTop>
      </S.FavoriteItemLeft>
      <S.FavoriteItemRight>
        <S.FavoriteItemRightTrash onClick={onRemoveItem}>
            <Trash/>
        </S.FavoriteItemRightTrash>
      </S.FavoriteItemRight>
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
