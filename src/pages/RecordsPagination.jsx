import React, {useEffect, useState} from 'react';
import useHelmet from '../hooks/useHelmet';
import apiCaller from '../utils/apiCaller';
import './records.css';
import { filterList } from '../utils/common';

const RecordPagination = () => {
    useHelmet("Records");
    const [pageState, setPageState] = useState({page: 1, sortedList: [], loading: false});
    useEffect(() => {
    apiCaller('http://localhost:3333/employees').then((list) => {
        let sl = [];
        if(list.length > 0) {
            alert(list.length);
         sl = filterList(pageState.page, list);
        }
        setPageState({...pageState, employeeList : list, sortedList: sl});
    });
    }, []);

    const handleButtonClick = (pageNum, e) => {
        setPageState({...pageState, sortedList : filterList(pageState.page, pageState.employeeList),page : pageNum});
    }

    const renderButtons = () => {
        const arrayLength = pageState?.employeeList?.length;
        const countButtons = Math.round(arrayLength/10);
        let buttons = [];

        if(arrayLength) {
            for(let i = 0; i<=countButtons ; i++ ) {
                buttons.push(i);                
            }
        }

        return <div>{
            buttons.map(item => {
                if(item > 0) {
                    return <button onClick={(e) => handleButtonClick(item, e)}>{item}</button>
                }
            })    
            }</div>
        
    }

    const renderList = () => {
        return pageState?.sortedList?.length > 0 ? 
           <div> 
            <ul className="records-list">
                {pageState.sortedList.map(data => {
                    return <li key={data.id}>{data.name}</li>
                })}
            </ul>
            </div>
        : <div> Loading............. </div>
    }
    return <>
        {renderList()}
        {renderButtons()}

    </>
}

export default RecordPagination;
