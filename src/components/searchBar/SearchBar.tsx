import React, { useEffect, useState } from "react";
import "./style/SearchBar.css";
import useAuth from "hooks/useAuth";
import useSearch from "hooks/useSearch";
import API from "api";
import { icons } from "images";

const SearchBar = () => {
  const { setSearch } = useSearch();
  const { auth } = useAuth();
  // const [searchInput, setSearchInput] = useState<string>("");
  const [searchBarData, setSearchBarData] = useState<any>();
  const [searchBarlist, setSearchBarlist] = useState<any>();
  const [selected, setSelected] = useState<any>();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const getSearchBarList = async () => {
      const res = await API.search.getSearchBarData(auth);
      console.log(res);
      return res;
    };
    if (searchBarData?.length === 0 || searchBarData === undefined)
      getSearchBarList().then((data) => setSearchBarData(data));
  }, [auth, focus]);

  useEffect(() => {
    let comps: any[] = [];
    let prods: any[] = [];
    searchBarData?.companyList.forEach((el: any, idx: number) =>
      comps.push(
        <option
          key={idx + 1000}
          data-type="company"
          data-idvalue={el._id}
          value={el.name}
        ></option>
      )
    );
    searchBarData?.productList.forEach((el: any, idx: number) =>
      prods.push(
        <option
          key={idx + 2000}
          data-type="product"
          data-idvalue={el._id}
          value={el.name}
        >
          {el.company.name}
        </option>
      )
    );
    // console.log(comps,prods)
    setSearchBarlist([...comps, ...prods]);
  }, [searchBarData]);

  const getSearchResult = () => {
    console.log("search:", selected);
    setSearch(selected);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value, e);
    //   setSearchInput(e.target.value);
    let data = searchBarData?.companyList.find(
      (el: any) => el.name.toLowerCase() === e.target.value.toLowerCase()
    );
    if (!data)
      data = searchBarData?.productList.find(
        (el: any) => el.name.toLowerCase() === e.target.value.toLowerCase()
      );
    setSelected(data);
    console.log(data);
  };
  return (
    <div className="search-bar">
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="search"
        list="search-list"
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") getSearchResult();
        }}
        onChange={handleSearchChange}
      />
      <datalist id="search-list">{searchBarlist}</datalist>

      <img src={icons.search} alt="search icon" onClick={getSearchResult} />
    </div>
  );
};

export default SearchBar;
