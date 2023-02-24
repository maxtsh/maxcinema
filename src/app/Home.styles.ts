import styled from "styled-components";
import type { HomeContainerProps } from "./Home.types";

export const Container = styled.main<HomeContainerProps>`
  height: 100vh;
  background: ${(p) => `url(${p.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    display: flex;
    align-items: flex-end;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  }

  .content {
    display: flex;
    margin-bottom: 2rem;

    &__details {
      padding: 0.5rem;
      flex: 0.5;

      &__title {
        color: #fff;
        font-size: 3rem;
        font-weight: 700;
      }
      &__stats {
      }

      &__description {
        color: #fff;
      }
    }

    &__info {
      padding: 0.5rem;
      flex: 0.5;

      &__posters {
        display: flex;
        flex-wrap: wrap;

        &__poster {
          display: flex;
          flex-direction: column;
          cursor: pointer;

          &__image {
          }

          &__title {
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
          }
        }
      }
    }
  }
`;
