import {
  SearchbarContainer,
  CenterDiv,
  Input,
  RightDiv,
  Line,
  InputDesktop,
} from "./styled";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { ProductsFiltersContext } from "../../providers/ProductsFilters";

const SearchBar = ({ isSearching, setIsSearching, viewerWidth }) => {
  const { filterProducts } = useContext(ProductsFiltersContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
    filterProducts(input);
  }, [input]);

  return (
    <>
      {viewerWidth < 865 ? (
        <SearchbarContainer>
          <CenterDiv>
            <Input
              placeholder="Pesquise um produto"
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <RightDiv>
              <Line></Line>
              <BiSearch
                style={{ cursor: "pointer" }}
                fontSize="25px"
                color="var(--grey-1)"
              />
            </RightDiv>
          </CenterDiv>
        </SearchbarContainer>
      ) : (
        <>
          {isSearching && (
            <InputDesktop
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              isSearching={isSearching}
            />
          )}
          <BiSearch
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => setIsSearching(isSearching ? false : true)}
            fontSize="25px"
          />
        </>
      )}
    </>
  );
};

export default SearchBar;
