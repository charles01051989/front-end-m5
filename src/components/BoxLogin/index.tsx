import logo from 'assets/imgs/logo.png';
import ButtonLarge from 'components/ButtonLarge';
import { HTMLAttributes, useState } from 'react';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>

export type BoxLoginProps = {
  onSubmitData: (data: {name: string, password: string}) => void
  errorMessage: string
} & BoxLoginType;

const BoxLogin = ({onSubmitData, errorMessage}: BoxLoginProps) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (): void => {
        const data = {name, password};
        onSubmitData(data);
    }
    
    return (
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>90's</span>
                    <span>Games</span>
                </S.BoxLoginLogoText>
                <S.BoxLoginLogoImage src={logo} alt="Logo"/>
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />
                <ButtonLarge
                    value="Entrar"
                    type="button"
                    onClick={handleSubmit}/>
            </S.BoxLoginForm>
            { Boolean(errorMessage.length) && <S.BoxLoginError>{errorMessage}</S.BoxLoginError> }
        </S.BoxLogin>
    );
}

export default BoxLogin;