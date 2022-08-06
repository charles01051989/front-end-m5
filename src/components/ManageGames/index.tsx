import { ReactComponent as Add } from "assets/icons/add.svg";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageGamesType = HTMLAttributes<HTMLDivElement>;

type ManageGamesProps = {} & ManageGamesType;

const ManageGames = ({ ...props }: ManageGamesProps) => {
  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Gerenciar Produtos</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Pizzas</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        <S.ManageGamesContentAdd>
          <Add />
          <span>Adicionar Pizza</span>
        </S.ManageGamesContentAdd>
        <S.AddCard>
          <S.EditForm type="text" placeholder="Título" />
          <S.EditForm type="number" placeholder="Preço" />
          <S.EditForm type="text" placeholder="Descrição" />
          <S.EditForm type="url" placeholder="Imagem" />
        </S.AddCard>
        {"Componente EditProduct"}
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel>Cancelar</S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave>
          Salvar Mudanças
        </S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;