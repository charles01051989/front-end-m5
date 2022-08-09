import { ReactComponent as Pencil } from "assets/icons/edit.svg";


import * as S from "./style";


const EditGame = () => {
    return (
        <S.EditGame>
            <>
                <S.EditGameImage src="https://bdjogos.com.br/capas/702-final-fight-2-super-nintendo-capa-1.jpg" alt="" />
                <S.EditGameDetails>
                    <S.EditGameDetailsName>Final Fight</S.EditGameDetailsName>
                    <S.EditGameDetailsPrice></S.EditGameDetailsPrice>
                    <S.EditGameDetailsDescription>Descrição do Game</S.EditGameDetailsDescription>
                </S.EditGameDetails>

                <S.EditGameAction>
                    <Pencil /> Editar
                </S.EditGameAction>
            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Título"
                />
                <S.EditForm
                    type="number"
                    placeholder="Ano"
                />
                <S.EditForm
                    type="text"
                    placeholder="Descrição"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditGame>
    );
}

export default EditGame;