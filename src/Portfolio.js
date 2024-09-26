
import './App.css';

import React from'react';

import { data } from './data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

const useState = React.useState;

function Portfolio() {
    const nameButton = ["All", "Websites", "Flayers", "Business Cards"];//названия кнопок
    const [clickButton, setClickButton] = useState("All");//состояние активной кнопки
    const [arrData, setArrData] = useState(data);//состояние блока фотографий
    console.log(arrData);
    function click(item) {
        console.log(item);
        setClickButton(item);
        if(item === "All") {
            setArrData(data);
        } else {
            setArrData(data.filter((el) => {
                return el.category === item;
            }));
        }
    }
    return (
        <div className="container">
            <Toolbar
                nameButton={nameButton}
                elem={clickButton} func = {click}
            />
            <ProjectList data={arrData}/>
        </div>
    );
}

export default Portfolio;