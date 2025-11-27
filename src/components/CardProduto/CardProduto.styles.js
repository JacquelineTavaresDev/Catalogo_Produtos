import styled, { keyframes } from "styled-components";

// Animação de hover do card
const levantar = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-4px); }
`;

export const Card = styled.div`
  width: 240px;
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 4px 14px ${({ theme }) => theme.colors.sombra};
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    animation: ${levantar} 0.2s forwards;
    box-shadow: 0 6px 18px ${({ theme }) => theme.colors.sombra};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 12px;
  transition: 0.3s ease;

  ${Card}:hover & {
    filter: brightness(1.1);
  }
`;

export const Nome = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Descricao = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
`;

export const Preco = styled.strong`
  display: block;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const BotaoAdicionar = styled.button`
  background: ${({ $adicionado, theme }) =>
    $adicionado ? theme.colors.primary : "#6c757d"};
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
  width: 100%;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1.02);
  }
`;
