import * as S from "./style";
interface GameItemListProps {
  children: React.ReactNode;
}

const GameItemList = ({ children }: GameItemListProps) => {
  return (
    <section>
      <S.GameItemListHeader>
        <S.GameItemListHeaderTitle>
          Adicione os games a lista de favoritos
        </S.GameItemListHeaderTitle>
        {/* <S.GameItemListHeaderSelect>
            <option value="default">Selecione a mesa</option>
            <option value="">Mesa</option>
          </S.GameItemListHeaderSelect> */}
      </S.GameItemListHeader>
      <S.GameItemList>
{ children }
      </S.GameItemList>
    </section>
  );
};

export default GameItemList;
