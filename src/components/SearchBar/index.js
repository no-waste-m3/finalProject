import {
  SearchbarContainer,
  CenterDiv,
  Input,
  RightDiv,
  Line,
  InputDesktop,
} from "./styled";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const SearchBar = ({ isSearching, setIsSearching, viewerWidth }) => {
  const [input, setInput] = useState();
  return (
    <>
      {viewerWidth < 740 ? (
        <SearchbarContainer>
          <CenterDiv>
            <Input placeholder="Pesquise um produto" />
            <RightDiv>
              <Line></Line>
              <BiSearch fontSize="25px" color="cbcbcb" />
            </RightDiv>
          </CenterDiv>
        </SearchbarContainer>
      ) : (
        <>
          {isSearching && (
            <InputDesktop
              value={input}
              onChange={(e) => setInput(e.target.value)}
              isSearching={isSearching}
            />
          )}
          <BiSearch
            style={{ marginRight: "10px" }}
            onClick={() => setIsSearching(isSearching ? false : true)}
            fontSize="25px"
          />
        </>
      )}
    </>
  );
};

export default SearchBar;
