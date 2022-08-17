import React from "react";
import {StudyApi} from "../helpers/const"


export const ClientContext = React.createContext(); 

const reducer = (state, action) => {
    if (action.type === "GET_UNIVERSITIES") {
        return {
            ...state,
            universities: action.payload
        }
    }
} 

function ClientProvider ({children}) {
    const [state, dispatch] = React.useReducer(reducer, {
        universities: []
    })

    const [searchWord, setSearchWord] = React.useState(""); 
    const [filterByPrice, setFilterByPrice] = React.useState([0, 999]);
  const [minMax, setMinMax] = React.useState([0, 999]);

  const limit = 3;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

    const getUniversities = () => {
        fetch(
            `${StudyApi}?q=${searchWord}&tuition_gte=${filterByPrice[0]}&price_lte=${filterByPrice[1]}&_limit=${limit}&_page=${currentPage}`
        )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let action = {
                type: "GET_UNIVERSITIES",
                payload: data,
            };
            dispatch(action)
        })
    }
    
    const getPrices = () => {
        fetch(StudyApi)
          .then((res) => res.json())
          .then((data) => {
            data.sort((a, b) => a.tuition - b.tuition);
            let max = data[data.length - 1].tuition;
            let min = data[0].tuition;
            setFilterByPrice([min, max]);
            setMinMax([min, max]);
          });
      };
      React.useEffect(() => {
          getPrices()
      }, [])


    const data = {
        universities: state.universities,
        searchWord, 
        filterByPrice,
        minMax,
        currentPage, 
        pagesCount, 
        setSearchWord, 
        setFilterByPrice,
        getUniversities, 
        setCurrentPage
    }

    return (
        <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
    )
}

export default ClientProvider;

