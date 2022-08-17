import React from "react";
import {StudyApi} from "../helpers/const";

export const AdminContext = React.createContext();

const reducer = (state, action) => {
if (action.type === "GET_UNIVERSITIES") {
    return {
        ...state, 
        universities: action.payload,
    };
}
if (action.type === "GET_UNIVERSITIES_TO_EDIT") {
    return {
        ...state,   
        universitiesToEdit: action.payload
    }
}
return state
}

function AdminProvider ({children}) {
const [state, dispatch] = React.useReducer(reducer, {
    universities: [], 
    universitiesToEdit: null, 
});

const sendNewUniversity = (newUniversity) => {
fetch(StudyApi, {
    method: "POST", 
    headers: {
        "Content-Type": "application/json", 
    }, 
    body: JSON.stringify(newUniversity),
}); 
}

const getUniversities = () => {
    fetch (StudyApi) 
    .then ((res) => res.json())
    .then ((data) => {
        let action = {
            type: "GET_UNIVERSITIES", 
            payload: data, 
        }
        dispatch(action)
    })
}

const deleteUniversity = (id) => {
    fetch(`${StudyApi}/${id}`, {
        method: "DELETE", 
    }).then(() => getUniversities())
};

const getUniversitiesToEdit = (id) => {
    fetch(`${StudyApi}/${id}`)
    .then((res) => res.json())
    .then((data) => {
        let action = {
            type: "GET_UNIVERSITIES_TO_EDIT", 
            payload: data, 
        };
        dispatch(action)
    })
}

const saveEditedUniversity = (editedUniversity) => {
    fetch(`${StudyApi}/${editedUniversity.id}`, {
        mathod: "PATCH", 
        headers: {
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(editedUniversity)
    })
}

const data = {
    universities: state.universities, 
    universitiesToEdit: state.universitiesToEdit,
    getUniversities,
    deleteUniversity, 
    sendNewUniversity,
    getUniversitiesToEdit, 
    saveEditedUniversity, 
}
return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>
}

export default AdminProvider;