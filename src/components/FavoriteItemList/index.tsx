import * as S from "./style";
import React, { HTMLAttributes } from "react";

type DivType = HTMLAttributes<HTMLDivElement>;

export type FavoriteItemListProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  list: React.ReactNode;
} & DivType;

const FavoriteItemList = ({
  header,
  list,
  footer,
  ...props
}: FavoriteItemListProps) => {
  return (
    <div {...props}>
      {header && <S.FavoriteItemListTitle> {header} </S.FavoriteItemListTitle>}

      <S.FavoriteItemList role="listbox">{list}</S.FavoriteItemList>

      {footer && <footer> {footer} </footer>}
    </div>
  );
};

export default FavoriteItemList;
