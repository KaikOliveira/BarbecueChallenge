import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 13px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
`;

export const P = styled.p`
  font-size: 14px;
  color: var(--text);
  margin-top: 15px;
  margin-bottom: 5px;
`;
