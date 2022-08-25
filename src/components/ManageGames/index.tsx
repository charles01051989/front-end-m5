import { useMutation, useQuery } from "@tanstack/react-query";
import { ReactComponent as Add } from "assets/icons/add.svg";
import EditGame from "components/EditGame";
import { HTMLAttributes, useEffect, useState } from "react";
import { GameService } from "services/GameService";
import { ErrorResponse } from "types/api/error";
import { Game, GameResponse } from "types/api/game";
import { QueryKey } from "types/QueryKey";
import * as S from "./style";

type ManageGamesType = HTMLAttributes<HTMLDivElement>;

type ManageGamesProps = {} & ManageGamesType;

const ManageGames = ({ ...props }: ManageGamesProps) => {
  const [games, setGames] = useState<GameResponse[]>([]);
  const { data: gamesData } = useQuery([QueryKey.GAMES], GameService.getLista);

  const add = useMutation(GameService.create, {
    onSuccess: (data: GameResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }
      const gameList = [...games, data as GameResponse];
      setGames(gameList);
    },
    onError: () => {
      console.error("Erro ao adicionar o game!");
    },
  });

  const form = {
    title: "",
    year: Number(""),
    image: "",
    description: "",
  };

  const [isAdding, setIsAdding] = useState(false);
  const [gameToAdd, setGameToAdd] = useState(form);

  const handleAddChange = (title: string, value: string | number) => {
    setGameToAdd({ ...gameToAdd, [title]: value });
  };

  const gameIsValid = () =>
    Boolean(
      gameToAdd.title.length &&
        gameToAdd.year.toString().length &&
        gameToAdd.description.length &&
        gameToAdd.image.length
    );

  const gameFormatter = (toFormat: typeof form): Game => ({
    title: toFormat.title,
    year: toFormat.year,
    description: toFormat.description,
    image: toFormat.image,
  });

  const [cancel, setCancel] = useState(false);

  const handleCancel = () => {
    setCancel(true);
    setIsAdding(false)
    setTimeout(() => setCancel(false));
  };

  const handleSave = () => {
    const canAdd = gameIsValid();
    const gameFormatted = gameFormatter(gameToAdd);

    if(canAdd) add.mutate(gameFormatted);
    setTimeout(() => handleCancel(), 300);
    setGameToAdd(form);
    setIsAdding(false);
  };

  useEffect(() => {
    setGames(gamesData || []);
  }, [gamesData]);

  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Gerenciar Games</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Games</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        {!isAdding ? (
        <S.ManageGamesContentAdd onClick={() => setIsAdding(!isAdding)}>
          <Add />
          <span>Adicionar Game</span>
        </S.ManageGamesContentAdd>
        ): (
        <S.AddCard>
          <S.EditForm 
            type="text" 
            placeholder="Título"
            success={Boolean(gameToAdd.title.length)}
            value={gameToAdd.title}
            onChange={ ({ target }) => handleAddChange("title", target.value) }
            />
          <S.EditForm 
            type="number" 
            placeholder="Ano"
            success={Boolean(gameToAdd.year)}
            value={gameToAdd.year || "" }
            onChange={ ({ target }) => handleAddChange("year", +target.value) }
            
            />
          <S.EditForm 
            type="text" 
            placeholder="Descrição" 
            success={Boolean(gameToAdd.description.length)}
            value={gameToAdd.description}
            onChange={ ({ target }) => handleAddChange("description", target.value) }
            />
          <S.EditForm 
            type="url" 
            placeholder="Imagem" 
            success={Boolean(gameToAdd.image.length)}
            value={gameToAdd.image}
            onChange={ ({ target }) => handleAddChange("image", target.value) }
            />
        </S.AddCard>
        )}
        {games.map((game, index) => (
          <EditGame game={game} key={index} />
        ))}
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel onClick={handleCancel}>
          Cancelar
        </S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave onClick={handleSave}>
          Salvar Mudanças
        </S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;
