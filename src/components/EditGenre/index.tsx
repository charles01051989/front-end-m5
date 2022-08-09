import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGenre = () => {
  return (
    <S.EditGenre>
      <>
        <S.EditGenreDetails>
          <S.EditGenreDetailsName>Action</S.EditGenreDetailsName>
        </S.EditGenreDetails>
        <S.EditGenreAction>
          <Pencil /> Editar
        </S.EditGenreAction>
      </>

      <>
        <label htmlFor="tableId"></label>
        <S.EditForm id="tableId"  placeholder="" />
        <S.Deletar>Deletar gênero</S.Deletar>
      </>
    </S.EditGenre>
  );
};

export default EditGenre;