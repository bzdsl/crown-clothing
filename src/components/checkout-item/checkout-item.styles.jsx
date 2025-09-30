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
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Name = styled.span`
  width: 23%;
  padding-right: 15px;
  word-wrap: break-word;
  font-weight: 500;
`;

export const QuantityContainer = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 8px 12px;
  font-weight: bold;
  transition: all 0.2s ease;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;

  &:hover {
    background-color: #e8e8e8;
    color: #333;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const QuantityValue = styled.span`
  margin: 0 15px;
  min-width: 30px;
  text-align: center;
  font-weight: 600;
`;

export const Price = styled.span`
  width: 23%;
  font-weight: 600;
  text-align: center;
  padding-right: 15px;
  color: #333;
`;

export const RemoveButton = styled.span`
  width: 8%;
  cursor: pointer;
  font-size: 24px;
  color: #999;
  transition: color 0.2s ease;
  user-select: none;
  text-align: center;

  &:hover {
    color: #ff4444;
  }

  &:active {
    transform: scale(0.9);
  }
`;
