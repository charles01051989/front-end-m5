import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGenre = () => {
  return (
    <S.EditGenre>
      <>
        <S.EditGenreDetails>
          <S.EditGenreDetailsName>Número da mesa</S.EditGenreDetailsName>
        </S.EditGenreDetails>
        <S.EditGenreAction>
          <Pencil /> Editar
        </S.EditGenreAction>
      </>

      <>
        <label htmlFor="tableId">Número da mesa</label>
        <S.EditForm id="tableId" type="number" placeholder="01" />
        <S.Deletar>Deletar Mesa</S.Deletar>
      </>
    </S.EditGenre>
  );
};

export default EditGenre;