import "./Class.css";
import React, {useState, useEffect} from 'react';

function Class(props) {

    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"

    useEffect ( () => {
        const fetchData = async () => {
            const response = await fetch(url + encodeURI(props.name));
            const data = await response.json();
            console.log(data);
            setClassInfo(data);
        }
        fetchData();
    }, [props.name]);
    
    // div that holds class info
    let info;
    if (classInfo) {
        info =
            <div className="classInfoContainer">
                <em id="title">{classInfo.title}</em>
                <p id="dept">{classInfo.department_name}</p>
                <p id="desc">{classInfo.description}</p>
            </div>
    } else {
        info = <p>Class not found!</p>
    }


    return (
        <div className="class">
            <strong>{props.name}</strong>
            <div>
                {info}
            </div>
        </div>
    )
}

export default Class;