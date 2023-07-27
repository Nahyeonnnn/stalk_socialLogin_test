import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch"
import BottomBar from '../global/bottomBar';
import SearchRecent from './searchRecent';

//axios 연결 시 받을 주식 리스트 예시
//일단은 주식 이름 string이 들어있다고 가정함
const testList = [
    {prdt_name : "애플"},
    {prdt_name : "삼성전자"},
    {prdt_name : "테슬라"},
    {prdt_name : "LG전자"},
    {prdt_name : "삼성생명"},
    {prdt_name : "삼성화재"},
    {prdt_name : "현대모비스"},
    {prdt_name : "아모레퍼시픽"},
    {prdt_name : "LG화학"},
    {prdt_name : "SK하이닉스"},
    {prdt_name : "삼성SDI"},
    {prdt_name : "삼성SDS"}
];

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchSmallContainer = styled.div`
    position: relative;
    span {
        position: absolute;
        left: 0.7rem;
        top: 4.5rem;
    }
`;

const SearchInput = styled.input`
    border: 0;
    background-color: var(--gray, #F9F9F9);
    width: 75vw;
    height: 1.5rem;
    border-radius: 12px;
    padding: 0.625rem 1rem 0.625rem 2rem;
    margin-top: 2rem;
`;

const AutoSearchContainer = styled.div`
  width: inherit;
  position: absolute;
  border: none;
`;


const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: inherit;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = () => {

    //axios 연결 시 주식 리스트를 저장할 변수
    const [stockList, setStockList]=useState(testList);
    //검색어를 저장하기 위한 useState
    const [query, setQuery]=useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions]=useState(false);
    const [searchResults, setSearchResults]=useState([]);//검색 결과 저장을 위한 useState

    function handleInputSearch(e){
        const {value} = e.target;
        setQuery(value);
        const SearchSuggestions = getSuggestions(value);
        setSuggestions(SearchSuggestions);
        setShowSuggestions(true);
    }

    const getSuggestions = (value) => {
        //검색어 자동 완성 결과를 가져오는 로직을 구현합니다.
        //예시: 데이터는 배열 형태로 가정하고, 배열 요소 중에 입력된 검색어를 포함하는 항목들을 추출

        const filteredSuggestions = stockList.filter((item)=>
            item.prdt_name.includes(value)
        );
        return filteredSuggestions;
    }

    //중간 검색 과정에서의 키워드를 저장하는 함수
    const handleSelectSuggestion = (suggestion) => {
        setQuery(suggestion.prdt_name);
        setSuggestions([]);
        setShowSuggestions(false);
    }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const results = searchData(query);
    //     setSearchResults(results);
    //     setSuggestions([]); // 자동완성 결과 초기화
    //     setShowSuggestions(false);
    //     if (typeof onSearch === "function") {
    //       onSearch(results);
    //     }
    // };

    const searchData = (query) => {
        const results = stockList.filter((item)=>
            item.prdt_name.includes(query)
        );
        return results;
    }

    // const handleKeyPress = (e) => {
    //     if(e.key == "Enter"){
    //         handleFormSubmit(e);
    //     }
    // };

    const handleInputBlur = () => {
        setShowSuggestions(false);
    };

    function SearchIconClick(){
        axios
            .get(``)
            .then((res)=>{
                setStockList(res.data);
            })
            .catch((e)=>{
                console.log(e);
            });
    }

    //useEffect(()=>{},[]);

    //input 태그에 onchange, onblur, onkeypress 속성 추가

    return (
        <>
        <SearchContainer>
            <SearchSmallContainer>
                <span>
                <BiSearch onClick={SearchIconClick} color='gray'/>
                </span>
                <SearchInput type="text" value={query} onChange={handleInputSearch} placeholder='검색하기'></SearchInput>
                {query.length > 0 && showSuggestions && (
                <AutoSearchContainer>
                    <ul>
                        {
                            suggestions.map((result)=>(
                                <div>
                                    <AutoSearchData>{result.prdt_name}</AutoSearchData>
                                </div>
                            ))
                        }
                    </ul>
                </AutoSearchContainer>)}
                {searchResults.length > 0 && (
                    <AutoSearchContainer>
                        <ul>
                            {
                                searchResults.map((result)=>(
                                    <div>
                                        <AutoSearchData>{result.prdt_name}</AutoSearchData>
                                    </div>
                                ))
                            }
                        </ul>
                    </AutoSearchContainer>
                )

                }
                
            </SearchSmallContainer>
        </SearchContainer>
        <BottomBar></BottomBar>
        </>
    );
};

export default SearchBar;