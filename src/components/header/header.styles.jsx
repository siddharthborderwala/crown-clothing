import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionConatinerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: baseline;
`;

export const LogoConatiner = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px 0;
`;

export const OptionsConatiner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionConatinerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionConatinerStyles}
`;
