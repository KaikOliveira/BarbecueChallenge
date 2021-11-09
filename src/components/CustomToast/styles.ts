import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  position: absolute;
  inset: 13px 0;
  z-index: 9999999999999999999;

  span {
    color: var(--text-high);
    font-weight: 600;
    font-size: 1.3rem;
  }

  p {
    color: var(--text);
    padding-right: 0.5rem;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MarkerContainer = styled.div`
  position: absolute;
  height: 5.4rem;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  /* inset: 13px 0; */
`;
