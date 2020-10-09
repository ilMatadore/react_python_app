import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.jsx";

export const CollectionItemContainer = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 15px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 10px auto;
    height: 500px;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    position: absolute;
    top: 400px;
  }
`;

export const MoreInfoButton = styled(CustomButton)`
  width: 30%;
  opacity: 0.7;
  position: absolute;
  top: 55px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 15px;
  margin: auto;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  text-align: left;
  width: 70%;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;
  margin-right: 10px;
`;