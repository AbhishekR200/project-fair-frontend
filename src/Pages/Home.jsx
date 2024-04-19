import React from 'react'
import { Link } from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <div>
        <div className='row'>
            <div className='col-md-6 mt-5'>
              <h1 className='text-center'>
                Project Fair
              </h1>
              <p style={{textAlign:'justify'}} className='mx-2'>A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals. These tasks are completed by a group of people known as the project team, which is led by a project manager, who oversees the planning, scheduling, tracking and successful completion of projects.Project management software gives you the tools to manage all the parts of a project so it is delivered on time and within budget. ProjectManager is award-winning project management software with features to plan, manage and track your project in real time. Organize tasks on our robust Gantt, link all four types of task dependencies to avoid costly delays and save your project plan by setting a baseline. This allows you to track your actual progress against your planned progress to help you stay on track.</p>
              <div className='text-center'>
                <Link to={'/login'}>
                <button href="auth" className='btn btn-dark m-3'>Get Started</button>

                </Link>
              </div>
            </div>
            <div className='col-md-6 '>
<img src={programmer} width={'100%'} alt="" />
            </div>
        </div>

        <div className='row'>
                <div className="col-12">
                  <h1 className='text-center m-5'>Explore your project</h1>
                <marquee width="100%" direction="left" height="300px">
                    <div>
                      <ProjectCard/>
                    </div>

                </marquee>
                </div>
        </div>

        <div className='row mx-5 mb-3'>
          <h1 className='text-center m-5'>Our Services</h1>
          <div className="col-md-4">
            <div className='card shadow p-5'>
            <h3>Web Designing</h3>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi asperiores quas dolor excepturi dolorem aliquam ipsum dignissimos. Neque reprehenderit, nesciunt incidunt facilis sed aliquam distinctio! Quia doloremque nulla autem?</p>
            </div>
    
          </div>
          <div className="col-md-4">
          <div className='card shadow p-5'>
            <h3>Single Page Application</h3>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi asperiores quas dolor excepturi dolorem aliquam ipsum dignissimos. Neque reprehenderit, nesciunt incidunt facilis sed aliquam distinctio! Quia doloremque nulla autem?</p>
            </div>
          </div>
          <div className="col-md-4">
          <div className='card shadow p-5'>
            <h3>Backend Services</h3>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi asperiores quas dolor excepturi dolorem aliquam ipsum dignissimos. Neque reprehenderit, nesciunt incidunt facilis sed aliquam distinctio! Quia doloremque nulla autem?</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Home