import { ReactComponent as Add } from "assets/icons/add.svg";
import EditGame from "components/EditGame";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageGamesType = HTMLAttributes<HTMLDivElement>;

type ManageGamesProps = {} & ManageGamesType;

const ManageGames = ({ ...props }: ManageGamesProps) => {
  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Gerenciar Games</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Games</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        <S.ManageGamesContentAdd>
          <Add />
          <span>Adicionar Game</span>
        </S.ManageGamesContentAdd>
        <S.AddCard>
          <S.EditForm type="text" placeholder="Título" />
          <S.EditForm type="number" placeholder="Ano" />
          <S.EditForm type="text" placeholder="Descrição" />
          <S.EditForm type="url" placeholder="Imagem" />
        </S.AddCard>
        <EditGame />
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel>Cancelar</S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave>Salvar Mudanças</S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;
