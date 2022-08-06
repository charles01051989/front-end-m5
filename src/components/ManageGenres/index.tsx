import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditGenre from "components/EditGenre";

type ManageGenresType = HTMLAttributes<HTMLDivElement>;

type ManageGenresProps = {} & ManageGenresType;

const ManageGenres = ({ ...props }: ManageGenresProps) => {
  return (
    <S.ManageGenres {...props}>
      <S.ManageGenresTitle>Gerenciar Mesas</S.ManageGenresTitle>
      <S.ManageGenresSub>
        <b>Mesas</b>
      </S.ManageGenresSub>
      <S.ManageGenresContent>
        <S.ManageGenresContentAdd>
          <Add />
          <span>Adicionar mesa</span>
        </S.ManageGenresContentAdd>
        <S.ManageGenresContentAdd>
          <label htmlFor="tableId">Número da Mesa</label>
          <S.EditForm id="tableId" type="number" placeholder="01" />
        </S.ManageGenresContentAdd>
        <EditGenre/>
      </S.ManageGenresContent>
      <S.ManageGenresActions>
        <S.ManageGenresActionsCancel>Cancelar</S.ManageGenresActionsCancel>
        <S.ManageGenresActionsSave>Salvar Mudanças</S.ManageGenresActionsSave>
      </S.ManageGenresActions>
    </S.ManageGenres>
  );
};

export default ManageGenres;