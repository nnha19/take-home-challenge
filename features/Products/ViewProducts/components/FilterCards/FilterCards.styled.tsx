import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 1rem;
`;

export const FilterContainer = styled.div`
  width: 30rem;
  height:3rem;
  background: #ffffff;
  border-radius: 199px;
  margin: 2rem auto 0 auto;
  display: flex;
  .Dropdown-control {
    border: none;
    border-left: 1px solid #bcbbbb;
    border-right: 1px solid #bcbbbb;
    padding: 0 0.5rem;
    width: 5rem;
    height: 100%;
    display: flex;
    align-items: center;
    color: #bcbbbb;
    width:9rem;

    span {
        top:50%;
    }
  }

  .Dropdown-option {
    color:#bcbbbb;
  };
  }
`;

export const SearchCardsInput = styled.input`
  border: none;
  outline: none;

  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 199px;
  &::placeholder {
    color: #bcbbbb;
  }
`;
