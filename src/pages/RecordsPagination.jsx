import React, {useEffect, useState} from 'react';
import useHelmet from '../hooks/useHelmet';
import apiCaller from '../utils/apiCaller';
import './records.css';

const sortList = (page, list) => {
    const start = 10*(page-1);
    const end = (page*10);
    const items = list?.slice(start, end);
    return items;
}

const RecordPagination = () => {
    useHelmet("Records");
    const [pageState, setPageState] = useState({page: 1, sortedList: [], loading: false});
    useEffect(() => {
    apiCaller('http://localhost:3333/employees').then((list) => {
        let sl = [];
        if(list.length > 0) {
         sl = sortList(pageState.page, list);
        }
        setPageState({...pageState, employeeList : list, sortedList: sl});
    });
    }, []);

    const handleButtonClick = (pageNum, e) => {
        const sl = sortList(pageState.page, pageState.employeeList);
        if(sl?.length > 0) {
            setPageState({...pageState, page : pageNum, sortedList : sl});
        }
    }

    const renderList = () => {
        return pageState?.employeeList?.length > 0 ? 
           <div> 
            <ul className="records-list">
                {pageState.sortedList.map(data => {
                    return <li key={data.id}>{data.name}</li>
                })}
            </ul>

            <div>
                <div>
                    <button onClick={(e) => handleButtonClick(1, e)}>1</button>
                    <button onClick={(e) => handleButtonClick(2, e)}>2</button>
                    <button onClick={(e) => handleButtonClick(3, e)}>3</button>
                </div>
            </div>
            </div>
        : <div>Loading ...... </div>
    }
    return <>
        {renderList()}
    </>
}

export default RecordPagination;
