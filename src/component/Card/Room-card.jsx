import { useState } from "react";
import roomView from '../../assets/images/room.png';
import user from '../../assets/images/user.png';
import  dollar from '../../assets/images/dollar-square.png';

const RoomCard = () => {
    return (
        <div className="flex flex-col w-56 h-42 border rounded-lg">
            <img src={roomView} ></img>
            <div className="flex flex-row justify-between p-2">
                <p className="font-bold text-base">Aster Room</p>
                <p className="h-auto p-1 bg-orange-500 text-white text-xs border rounded-lg">Small</p>
            </div>
            <div className="flex flex-row justify-between p-2">
                <div className="flex flex-row justify-between ">
                    <img src={user}></img>
                    <p className="text-xs">10 orang</p>
                </div>
                <div className="flex flex-row justify-between ">
                    <img src={dollar}></img>
                    <div className="flex flex-row">
                        <p className="text-xs">Rp.500.000</p>
                        <p className="text-xs font-thin text-gray-500">/hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;