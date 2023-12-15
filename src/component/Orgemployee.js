import React,  { useState, useEffect } from 'react';
import "../css/style.css";
import { Menu } from "antd";
import ReactFlow from 'reactflow';
import styled from 'styled-components';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Link, useNavigate } from "react-router-dom";

import 'reactflow/dist/style.css';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: <div className='org'>  <img src='/images/Frame 1.png' /> <p>CEO</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '2', position: { x: 0, y: 250 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>VP</p>  <p>Region</p> <button>ROLE</button>  <p>Location</p> </div>}  },
//   { id: '3', position: { x: 0, y: 500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>VP</p>  <p>Country</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '4', position: { x: 0, y: 750 }, data:{ label: <div>  <img src='/images/Frame 1.png' /> <p>VP</p>  <p>State</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '5', position: { x: 0, y: 1000 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>VP</p>  <p>Department </p> <button>ROLE</button>  <p>Location</p> </div>} },

//   { id: '6', position: { x: 350, y: 1250 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Manegar</p>  <p>Department </p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '7', position: { x: 950, y: 1250 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Manegar</p>  <p>Department </p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '8', position: { x: -300, y: 1250 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Manegar</p>  <p>Department </p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '9', position: { x: -900, y: 1250 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Manegar</p>  <p>Department </p> <button>ROLE</button>  <p>Location</p> </div>} },
  
//   { id: '10', position: { x: -1100, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '11', position: { x: -900, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>}  },
//   { id: '12', position: { x: -700, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '13', position: { x: -500, y: 1500 },  data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '14', position: { x: -300, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>}  },
//   { id: '15', position: { x: -100, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '16', position: { x: 150, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '17', position: { x: 350, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>}  },
//   { id: '18', position: { x: 550, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '19', position: { x: 750, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
//   { id: '20', position: { x: 950, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>}  },
//   { id: '21', position: { x: 1150, y: 1500 }, data: { label: <div>  <img src='/images/Frame 1.png' /> <p>Employee</p>  <p>Team</p> <button>ROLE</button>  <p>Location</p> </div>} },
// ];

// export const initialEdges = [
//   // { id: 'e1-5', source: '1', target: '5', animated: true },
//   // { id: 'e5-6', source: '5', target: '6', animated: true },
//   // { id: 'e5-7', source: '5', target: '7', animated: true},
//   // { id: 'e5-9', source: '5', target: '9', animated: true},
//   // { id: 'e5-8', source: '5', target: '8', animated: true},
//   { id: 'e6-16', source: '6', target: '16', animated: true},
//   { id: 'e6-18', source: '6', target: '18', animated: true},
//   { id: 'e6-17', source: '6', target: '17', animated: true},
//   { id: 'e7-19', source: '7', target: '19', animated: true},
//   { id: 'e7-19', source: '7', target: '20', animated: true},
//   { id: 'e7-19', source: '7', target: '21', animated: true},
//   { id: 'e9-10', source: '9', target: '10', animated: true},
//   { id: 'e9-10', source: '9', target: '11', animated: true},
//   { id: 'e9-10', source: '9', target: '12', animated: true},
//   { id: 'e8-13', source: '8', target: '13', animated: true},
//   { id: 'e8-13', source: '8', target: '14', animated: true},
//   { id: 'e8-13', source: '8', target: '15', animated: true},
// ];

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid blue;
`;

function Orgemployee() {

  const [show, setShow] = useState(false);
  const [mangar, setManegar] = useState(false);
  const [ceo, setCeo] = useState(false)
  const [hr, setHr] = useState(false)

  const [isMenuOpen, setMenuOpen]  = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const navigate = useNavigate();
  // Dark Mode Code
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  }
    return (
        
    <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>

    <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Asset provisionary.svg " onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Attendences.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Health safety and well being.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/HR analytics & reporting.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/legal compliance.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Onboarding & offboarding.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/payroll.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Performance Mangament.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Recruitment.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/training & learning.svg" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>

<div>

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>

<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<Menu 
onChange={(e) => window.location.href = e.target.value}
mode="inline"
items={[
    {
        label: "Organization",
        key: "Organization", 
        children: [
            {
                label: (
            <Link to="/">
             Department
            </Link>
          ),
          value: "/",
        },
        {
            label: (
        <Link to="/Designation">
         Designation
        </Link>
      ),
      value: "/Designation",
    },
    {
        label: (
            <Link to="/Project">
             Project
            </Link>
          ),
          value: "/Project",
          },
    {
        label: (
            <Link to="/Role">
              Role & Responsibilities
            </Link>
          ),
          value: "/Role",
        },
          {
              label: (
            <Link to="/Team">
             Teams
            </Link>  
    ),
    value: "/Team",
},
{
    label: (
  <Link to="/Orgchart">
   Organization Chart
  </Link>  
),
value: "/Orgchart",
},
 ], }, ]}
  className='labelside'>
</Menu>
<ul>
<li> <Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> 
</li>
<li>
 <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> 
</li>
<li>
<Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> 
</li>
<li>
<Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> 
</li>
<li>
<Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> 
</li>

</ul>
</div>
</div>
</div>
</div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search'/>
                                </form>
                        </div>
                        <ul>
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox" onClick={toggleDarkMode} />

                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>

                        </ul>
                       
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>

                 {/* <div className='orgcharts'> 
                 <h2>Employees Chart</h2>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
                 </div>   */}

   
<Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode><div style={{cursor: 'pointer'}} onClick={()=>setShow(!show)}>CEO</div>  </StyledNode> } 
  >
    <TreeNode label={<StyledNode> {
        show?<p style={{cursor: 'pointer'}} onClick={()=>setManegar(!mangar)}> Manegar </p>:null
        }</StyledNode>}>
      <TreeNode label={<StyledNode>   {
        mangar?<p> Employee </p>:null
    }</StyledNode>} />
      <TreeNode label={<StyledNode>   {
        mangar?<p> Employee </p>:null
    }</StyledNode>} />
    </TreeNode>
    <TreeNode label={<StyledNode> {
        show?<p style={{cursor: 'pointer'}} onClick={()=>setHr(!hr)}> HR </p>:null
    }</StyledNode>}>
      <TreeNode label={<StyledNode> {
        hr?<p> Manegar </p>:null
    }</StyledNode>}>

        <TreeNode label={<StyledNode> {
        hr?<p> Department </p>:null
    }</StyledNode>} />
    <TreeNode label={<StyledNode> {
        hr?<p> Department </p>:null
    }</StyledNode>} />
        <TreeNode label={<StyledNode> {
        hr?<p> Employee </p>:null
    }</StyledNode>} />
      </TreeNode>

      
    </TreeNode>
    <TreeNode label={<StyledNode> {
        show?<p style={{cursor: 'pointer'}} onClick={()=>setCeo(!ceo)}> Manegar </p>:null
    }</StyledNode>}>
      <TreeNode label={<StyledNode> {
        ceo?<p> Employee </p>:null
    }</StyledNode>} />
      <TreeNode label={<StyledNode> {
        ceo?<p> Employee </p>:null
    }</StyledNode>} />
    </TreeNode>

  </Tree>
  </div>   
                </div>
            </div> 
    )
}

export default Orgemployee;