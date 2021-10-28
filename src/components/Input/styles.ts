import styled, { css } from 'styled-components';

import { Tooltip } from '~/components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--white);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 0.15rem solid var(--gray);
  color: var(--placeholder);
  display: flex;
  align-items: center;
  height: 5rem;
  transition: all 0.3s ease-in;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: var(--primary-high);
      }
      border-color: var(--primary-low);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: var(--primary-high);
      }
      border: 0.3rem solid var(--gray);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0 none;
    color: var(--text);
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.1rem;

    &::placeholder {
      color: var(--placeholder);
    }
    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 1.6rem;
    transition: all 0.3s ease-in;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--red);
    color: #fff;
    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
