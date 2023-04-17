import styled from "styled-components";

export const Screen = styled.div`
    min-height: 100vh; 
`
// vh-% от высоты экрана (видимого размера окна), для ширины -wh
export const SmColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 400px;
  margin: 2em auto;
`;