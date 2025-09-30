/** @format */
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid darkgrey;
  margin-bottom: 10px;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-weight: bold;
  font-size: 16px;
  color: #333;

  &:last-child {
    width: 8%;
  }

  &:nth-child(1) {
    text-align: left;
  }

  &:nth-child(2) {
    text-align: left;
  }

  &:nth-child(3) {
    text-align: center;
  }

  &:nth-child(4) {
    text-align: center;
  }

  &:nth-child(5) {
    text-align: center;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;
