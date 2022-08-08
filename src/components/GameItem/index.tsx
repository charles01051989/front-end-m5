import { GameResponse } from "types/Game";
import * as S from "./style";

type GameItemProps = {
  game: GameResponse;
  onSelect: (data: GameResponse) => void;
}

const GameItem = ({ game, onSelect}: GameItemProps) => {
  return <S.GameItem role='listitem' onClick={ () => onSelect(game) } >
    <S.GameItemImage src={game.image} alt={`${game.name}`} />
    <div>
  	<S.GameItemName>{game.name}</S.GameItemName>
  	<S.GameItemPrice>{game.price}</S.GameItemPrice>
  	<S.GameItemDescription>{game.description}</S.GameItemDescription>
  </div>
  </S.GameItem>
}

export default GameItem;