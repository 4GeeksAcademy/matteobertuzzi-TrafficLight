import React from 'react';
import {useState} from 'react';


export default function TrafficLight(){
    const [isRed, setRed] = useState(false);
    const [isYellow, setYellow] = useState(false);
    const [isGreen, setGreen] = useState(false);

    function colorRed(){
        setRed(true);
        setYellow(false);
        setGreen(false);
    }

    function colorYellow(){
        setYellow(true);
        setRed(false);
        setGreen(false);
    }

    function colorGreen(){
        setGreen(true);
        setRed(false);
        setYellow(false);
    }

    return(

        <>
			<div className="d-flex justify-content-center">
                <div className="trafficLight d-flex">
                    <div className="circle" style={{background: isRed?"#ff6961":"#EDEADE"}} onClick={colorRed}></div>
                    <div className="circle" style={{background: isYellow?"#FFDF9E":"#EDEADE"}} onClick={colorYellow}></div>
                    <div className="circle" style={{background: isGreen?"#d2e7d6":"#EDEADE"}} onClick={colorGreen}></div>
                </div>
			</div>
			<div className="d-flex justify-content-center mt-4">
                <div className="buttons d-flex justify-content-center">
                    <button type="button" className="btn btn-danger mx-2" onClick={colorRed}>Set red</button>
                    <button type="button" className="btn btn-warning mx-2" onClick={colorYellow}>Set yellow</button>
                    <button type="button" className="btn btn-success mx-2" onClick={colorGreen}>Set green</button>
                </div>
		    </div>
		</>
    )
}