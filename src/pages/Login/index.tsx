import { useState } from "react";

import QRCode from "qrcode.react";

import Button from "../../components/Button";
import Container from "../../components/Container";
import DivCreateAccount from "../../components/DivCreateAccount";
import DivInputs from "../../components/DivInputs";
import ImgLoading from "../../components/ImgLoading";
import DivQRCode from "../../components/DivQRCode";
import Form from "../../components/Form";
import FormContainer from "../../components/FormContainer";
import Image from "../../components/Image";
import ImageCode from "../../components/ImageCode";
import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";
import Label from "../../components/Label";
import Span from "../../components/Span";
import { StyledLink } from "../../components/StyledLink/StyledLink";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import VerticalSeparator from "../../components/VerticalSeparator";
import getBaseUrl from "../../utils/getBaseUrl";

const Logo1 = require("../../assets/discord-logo-1.png");
const Logo2 = require("../../assets/discord-logo-2.png");

function Login() {
  const [animation, setAnimation] = useState(false);

  return (
    <Container>
      <ImgLoading
        src={Logo2}
        alt="logo"
        animation={animation}
        style={{ maxWidth: "270px", width: "100%", height: "auto" }}
      />
      <Image
        src={Logo2}
        alt="logo"
        style={{ display: animation ? "none" : "block" }}
      />
      <FormContainer animation={animation}>
        <Form>
          <DivInputs>
            <Title>Boas-vindas de volta!</Title>
            <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
            <InputWrapper>
              <Label htmlFor="username">E-mail ou número de telefone</Label>
              <Input type="text" id="username" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" />
              <StyledLink>Esqueceu a senha?</StyledLink>
            </InputWrapper>
            <Button type="button" onClick={() => setAnimation(true)}>
              Entrar
            </Button>
            <DivCreateAccount>
              <Span>Precisando de uma conta?</Span>
              <StyledLink>Registre-se</StyledLink>
            </DivCreateAccount>
          </DivInputs>
          <VerticalSeparator />
          <DivQRCode>
            <ImageCode>
              <QRCode value={getBaseUrl()} size={176} />
              <img src={Logo1} alt="logo discord" />
            </ImageCode>
            <Title>Entrar com Código QR!</Title>
            <SubTitle>
              Escaneie isto com o <strong>app móvel do Discord</strong> para
              fazer login imediatamente.
            </SubTitle>
          </DivQRCode>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Login;
