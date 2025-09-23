/** @format */

import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 5px;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
  min-width: 20px;
  text-align: center;
`;

export const Price = styled.span`
  width: 23%;
  font-weight: 500;
`;

export const RemoveButton = styled.span`
  padding-left: 20%;
  cursor: pointer;
  font-size: 24px;
  color: #999;
  transition: color 0.2s ease;
  user-select: none;

  &:hover {
    color: #ff4444;
  }

  &:active {
    transform: scale(0.9);
  }
`;
