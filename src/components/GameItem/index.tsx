import { GameResponse } from "types/api/game";
import * as S from "./style";

type GameItemProps = {
  game: GameResponse;
  onSelect: (data: GameResponse) => void;
}

const GameItem = ({ game, onSelect}: GameItemProps) => {
  return <S.GameItem role='listitem' onClick={ () => onSelect(game) } >
    <S.GameItemImage src={game.image} alt={`${game.title}`} />
    <div>
  	<S.GameItemName>{game.title}</S.GameItemName>
  	<S.GameItemPrice>{game.year}</S.GameItemPrice>
    <S.GameItemGenre>{game.genre}</S.GameItemGenre>
  	<S.GameItemDescription>{game.description}</S.GameItemDescription>
  </div>
  </S.GameItem>
}

export default GameItem;