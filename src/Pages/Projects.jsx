import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-4'>All Projects</h2>
      <input type="text" style={{width:'400px',marginLeft:'600px'}} placeholder='Search By Technology' className='form-control mx-auto m-5' />
      <div className="row">
        <div className="col m-4">
          <ProjectCard/>
        </div>
      </div>
      </div>
  )
}

export default Projects