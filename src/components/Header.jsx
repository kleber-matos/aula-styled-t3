/** @format */

import React from "react";

import { css, styled } from "styled-components";

export default function Header() {
  //Mixin é uma técnica de reutilização de código que permite definir um conjunto de estilos.

  const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const Cabecalho = styled.header`
    background-color: red;
  `;

  const SubTitulo = styled.h2`
    color: purple;
    font-size: 2rem;
  `;

  const ButtonPrincipal = styled.button`
    background-color: yellow;
  `;

  return (
    <>
      <Cabecalho>
        <SubTitulo>Nome do site</SubTitulo>
        <SubTitulo>Nome do site</SubTitulo>
        <SubTitulo>Nome do site</SubTitulo>

        <ButtonPrincipal>Facebook</ButtonPrincipal>
        <ButtonPrincipal>Instagram</ButtonPrincipal>
        <ButtonPrincipal>Whatsapp</ButtonPrincipal>

        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </Cabecalho>
    </>
  );
}
