import React from 'react'
import Edit from '../../assets/edit.png'
import './DropDown.scss';
import EditDrop from '../../assets/edit-drop.png';
import Availability from '../../assets/availability.png';
import lock from '../../assets/lock.png';
import deleteIcon from '../../assets/delete.png';

function DropDown() {
    return (
        <div class="dropdown">
            <button class="dropbtn">
                <img className="menuSetting" src={Edit} alt="" />
            </button>
            <div class="dropdown-content">
                <a href="#">
                    <img src={EditDrop} alt="" />
                    Edit
                </a>
                <a href="#">
                    <img src={Availability} alt="" />
                    Availability
                </a>
                <a href="#">
                    <img src={lock} alt="" />
                    Make private
                </a>
                <a href="#" className='delete'>
                    <img src={deleteIcon} alt="" />
                    Delete</a>
            </div>
        </div>
    )
}

export default DropDown