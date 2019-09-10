import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background: #f5f7f9;

  @media screen and (max-width: 800px) {
    #notification {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 260px;

  background: linear-gradient(202deg, #6a79dd, #5866c3);
`;

export const MenuTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: auto;
  max-width: 1100px;

  margin-top: 40px;

  div {
    display: flex;
    align-items: center;

    width: 40%;
    height: 32px;

    span {
      color: #fff;
      font-size: 20px;
      margin-left: 20px;
    }

    span:last-child {
      opacity: 0.5;
      margin-left: 4px;
    }

    #name_user {
      opacity: 1;
      color: white;
      margin-left: 20px;
      max-width: 240px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:hover {
        cursor: pointer;
        text-decoration: #fff;
      }
    }

    #btn_sair {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 20px;
    }
  }

  #container-logo span {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    #container-logo span {
      display: none;
    }

    #name_user {
      max-width: 160px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #menu_mobile {
      left: 0;
      display: inline;
      margin-left: 10px;
    }
  }
`;

export const MenuBot = styled.div`
  width: 85%;
  height: 30px;

  font-size: 18px;
  margin-top: 40px;
  max-width: 1100px;

  color: #fff;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Li = styled.li`
  list-style-type: none;

  margin-left: 16px;
  padding: 8px 16px;
  border-radius: 80px;

  &:hover {
    background: #6a79dd;
    cursor: pointer;
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  width: 100%;
  height: auto;

  position: absolute;
  max-width: 1100px;
  margin-top: -60px;
  padding-bottom: 50px;

  @media screen and (max-width: 800px) {
    width: 98%;
    margin-top: -100px;
    margin-left: 1%;
  }
`;

export const Linha1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 1 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const BlocoGrafico = styled.div`
  display: flex;
  flex-direction: row;

  padding: 15px;
  border-radius: 5px;
  width: 100%;
  margin-right: 20px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  #earnings {
    display: flex;
    flex-direction: column;

    margin-left: 10px;

    h1 {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1.5px;

      color: #79828b;
    }

    h2 {
      font-size: 30px;
      color: #42505c;
    }

    h2 span {
      opacity: 0.5;
    }

    h3 {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }

    h3 span {
      font-size: 14px;
      color: #28c784;
    }

    span {
      margin-top: 5px;
    }

    @media screen and (max-width: 960px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;

      div:last-child {
        margin-left: 20px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    width: 98%;
    flex-direction: column-reverse;
  }
`;

export const BlocoRankProjects = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 98%;
  }
`;

export const BlocoRank = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  padding: 15px;
  border-radius: 4px;

  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .icon-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 5px;
      font-size: 30px;
    }
  }

  .blocoRank-info {
    display: flex;
    font-size: 12px;

    span {
      color: #10c172;
    }
  }

  @media screen and (max-width: 960px) {
    margin: 10px 0 0 0;
  }
`;

export const BlocoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 10px;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 14px;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    justify-content: center;
  }
`;

export const BlocoBot = styled.div`
  padding-top: 10px;

  h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-transform: uppercase;

    color: #79828b;
  }
`;

export const Rank = styled.div`
  h2 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  div h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const Projects = styled.div`
  margin-left: 20px;

  h2 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  div h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  @media screen and (max-width: 960px) {
    margin-left: 80px;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 100%;

  background: linear-gradient(202deg, #6a79dd, #5866c3);
`;

export const Tags = styled.div`
  list-style-type: none;

  padding: 5px 10px;
  border-radius: 80px;
  margin: 5px 0 0 5px;

  color: #8d99a4;
  background: #eee;

  &:hover {
    cursor: pointer;

    color: #fff;
    background: #5866c3;
  }
`;

export const Linha2 = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (max-width: 960px) {
    width: 98%;
  }
`;

export const HeaderLinha2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 15px;

  h3 {
    color: #42505c;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.25px;

    &:hover {
      color: #5866c3;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: center;

  margin-top: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 960px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;

  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 0;
  }

  .horas {
    color: #79828b;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }

  .user-card {
    color: #42505c;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin-left: 10px;
  }

  div div {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentCard = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;

  margin-top: 10px;
  padding-bottom: 10px;

  color: #42505c;
  border-bottom: 1px solid #eee;
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
  padding-top: 5px;

  div {
    display: flex;
  }

  div div {
    padding: 5px 10px;
  }

  div div:last-child {
    margin-left: 10px;
  }

  span {
    color: #79828b;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: right;
  }
`;

export const Linha3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: auto;
  margin-top: 15px;
  border-radius: 5px;
  padding: 40px 20px;

  color: #fff;
  background: linear-gradient(202deg, #8f9df8, #92a0ff);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }

    div img {
      margin-right: 10px;
    }

    h2 {
      font-size: 24px;
      margin-left: -35px;
    }

    div p {
      opacity: 0.75;
      font-weight: 400;
      max-width: 400px;
      margin-left: 10px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    margin: 0;
    margin-top: 15px;
    padding-bottom: 30px;

    width: 98%;

    div {
      h2 {
        text-align: center;
      }
    }

    div {
      flex-direction: column;
    }

    div img {
      margin-top: -20px;
      padding-bottom: 10px;
    }

    #botoes {
      flex-direction: row;
      padding-top: 25px;
    }

    div p {
      text-transform: justify;
      max-width: 400px;
      text-align: center;
    }
  }
`;

export const ButtonRemind = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin-right: 22px;

  color: white;
  border: 1px solid #fff;
  background: transparent;

  &:hover {
    color: #fff;
    background: #6574d6;
    border: 1px solid #6574d6;
  }
`;

export const ButtonJoin = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 5px;

  color: white;
  background: #6574d6;
  border: 1px solid #6574d6;

  &:hover {
    color: #6574d6;
    background: #fff;
    border: 1px solid #fff;
  }
`;

export const Linha4 = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const BlocoActivity = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  div p {
    color: #79828b;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  .info-money {
    display: flex;
    align-items: center;

    div {
      margin: 5px 0;
      padding: 1px 10px;
    }

    p {
      margin-left: 10px;
    }
  }

  #title {
    h1 {
      color: #79828b;
      font-size: 14px;
      font-weight: 500;
      line-height: 15px;
      padding-bottom: 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 960px) {
    width: 98%;
  }
`;

export const HeaderActivity = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px 0;
  background: transparent;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div h1 {
    color: #42505c;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.25px;
  }

  div h3 {
    color: #79828b;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-align: right;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    &:hover {
      color: #5866c3;
      cursor: pointer;
    }
  }
`;

export const BodyActivity = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .icon-user {
    display: flex;
    flex-direction: row;
    margin-right: 20px;

    div {
      background: #cff3e3;
    }

    img:hover {
      cursor: pointer;
    }
  }

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    flex-direction: row;

    div div {
      display: flex;
      flex-direction: row;
    }

    div h2 {
      color: #42505c;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .horas {
    color: #79828b;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const BlocoTopEarners = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 98%;
  }
`;

export const HeaderTopEarners = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  background: transparent;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div h1 {
    color: #42505c;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.25px;
  }

  div h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-align: right;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    color: #79828b;

    &:hover {
      color: #5866c3;
      cursor: pointer;
    }
  }
`;

export const BodyTopEarners = styled.div`
  padding: 20px;
  border-radius: 5px;

  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;
    }

    h1 {
      color: #79828b;
      font-size: 14px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    h3 {
      color: #79828b;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }

    h3 span {
      color: #6271d2;
      margin-left: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  li {
    display: flex;
    flex-direction: row;
    list-style-type: decimal;

    padding-top: 10px;
    border-bottom: 1px solid #eee;
  }

  li img:hover {
    cursor: pointer;
  }

  li:last-child {
    border: 0;
  }

  li div {
    margin-left: 10px;
  }

  li div span {
    color: #79828b;
  }
`;

export const Eth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  border-radius: 80px;

  margin-top: 5px;
  border: 1px solid #eff1fa;

  color: #6271d2;
  background: #eff1fa;

  &:hover {
    cursor: pointer;
    border: 1px solid #6271d2;
  }
`;

export const Btc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  border-radius: 80px;

  color: #d49368;
  background: #faf3ef;
  margin-top: 5px;
  border: 1px solid #faf3ef;

  &:hover {
    cursor: pointer;
    border: 1px solid #d49368;
  }
`;
