import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h2 className='ms-5'>
                My Projects
            </h2>
            <AddProject/>
        </div>
        <div className="row shadow m-4 p-5">
          <div className="col-6">
            Project Title
          </div>
          <div className="col-6 d-flex justify-content-evenly">
            <button className='btn'><FaGithub /></button>
            <button className='btn'><FaUserEdit /></button>
            <button className='btn'><MdDelete /></button>

          </div>
        </div>
    </div>
  )
}

export default MyProject