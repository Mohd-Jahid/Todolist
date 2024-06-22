import React, { useState } from 'react'

function TodoList() {

    const [msg, setMsg] = ("Please Enter Something")
    const [activity, setActivity] = useState();
    const [listData, setListData] = useState([]);
    function addActivity() {
        setListData((listData) => {
            if (activity) {
                const updateList = [...listData, activity]
                console.log(updateList)
                setActivity('');
                return updateList
            }
            else {
                alert("Please Enter value")
            }
        }

        )
    }

    function removeActvicity(i) {
        const updateListData = listData.filter((elem, id) => {
            return i != id;
        })
        setListData(updateListData);
    }
    function removeAll() {
        setListData([])
    }
    return (
        <>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input type='text' placeholder='Add Activity'
                    value={activity}
                    onChange={(e) => setActivity
                        (e.target.value)}
                />
                <button onClick={addActivity}>Add</button>


                <p className="List-heading">Here is your List :{")"}</p>
                {listData != [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className="listData">{data}</div>
                                <div className="btn-position"><button onClick={() => removeActvicity(i)}>
                                    remove(-)</button></div>
                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 &&
                    <button onClick={removeAll}>Remove All</button>}

            </div>
        </>

    )
}

export default TodoList;

