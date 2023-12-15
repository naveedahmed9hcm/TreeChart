import React,  { useState, useEffect } from 'react';
import "../css/style.css";
import { Menu } from "antd";
import styled from 'styled-components';
import axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Link, useNavigate } from "react-router-dom";
import 'reactflow/dist/style.css';

// const StyledNode = styled.div`
// padding: 5px;
// border-radius: 8px;
// display: inline-block;
// border: 1px solid black;
// opacity: 1; 
// transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
// &:hover {
//   background-color: #D9EDFF;
//   transform: scale(1.1); 
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;

const StyledNode = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid black;
  opacity: 1; 
  transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background-color: black;
    transition: width 0.5s ease-in-out;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    background-color: #D9EDFF;
    transform: scale(1.1); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &::before,
    &::after {
      width: 100%;
    }
  }
`;


function Orgchart() {


  const [mydatas, setMydata] = useState([]);
  const [member, setMember] = useState([])
  const [employee, setEmployee] = useState([])

  // Integration Get Top Management

 const GetCeoData = async() => {
     const res = await axios.get("http://localhost:5247/api/OrganisationInformation/GetTopOrganisationMember?organisationid=5fb5bf1b-205b-4116-a74e-dcd723379f83");
     setMydata(res.data.Response) } 
        //  console.log(mydatas, '123');
     useEffect(() => {
      GetCeoData();
       }, []);   

        // Integration Get Top Members

 const GetMemberData = async() => {
  const res = await axios.get("http://localhost:5247/api/OrganisationInformation/GetAllTeamMember?teamid=5e564cf2-a456-4b30-a0d5-cab6f4995304");
  setMember(res.data.Response) } 
      // console.log(mydatas, '123');
  useEffect(() => {
    GetMemberData();
    }, []);   

      // Integration Get Top Employee

 const GetEmployeeData = async() => {
  const res = await axios.get("http://localhost:5247/api/OrganisationInformation/GetAllEmployees?departmentid=a74585b3-62da-4b1c-bc11-8baf27a9403d");
  setEmployee(res.data.Response) } 
      // console.log(mydatas, '123');
  useEffect(() => {
    GetEmployeeData();
    }, []);   



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
// {
//   label: (
// <Link to="/Orgemployee">
//  Organization Employees
// </Link>  
// ),
// value: "/Orgemployee",
// },
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

</ul> </div> </div> </div> </div> 
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
                            <img src="/images/Ellipse 47.png"/>
                        </div>
                        </ul>
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>
                 <div className='oorgcharts' > 
                 <h2>Organization Chart</h2>
      <Tree
    lineWidth={'2px'}
    lineColor={'blue'}
    lineBorderRadius={'10px'}
    label={<StyledNode className={""} ><div style={{cursor: 'pointer'}} onClick={()=>setShow(!show)}> { mydatas.map( (Mdata) => (
        <option key={ Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.nameofowner
        } </p> </option>
    ))
    }</div>  </StyledNode> } 
  >

<TreeNode label={<StyledNode  className='styleanimate'>{
        show?<p style={{cursor: 'pointer'}} onClick={()=>setManegar(!mangar)}> Department { mydatas.map( (Mdata) => (
            <option key={ Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
            } </p> </option>
        ))
        } </p>:null
        }
    </StyledNode>}>
      <TreeNode label={<StyledNode  className='styleanimate'> {
        mangar?<p> { member.map( (Ldata) => (
          <option key={ Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
          } </p> </option>
      ))
      }  </p>:null
    }</StyledNode>}>

        <TreeNode label={<StyledNode  className='styleanimate'> {
        mangar?<p> Department </p>:null
    }</StyledNode>} />
    <TreeNode label={<StyledNode  className='styleanimate'> {
        mangar?<p> Department </p>:null
    }</StyledNode>} />
        <TreeNode label={<StyledNode  className='styleanimate'> {
        mangar?<p> Employee </p>:null
    }</StyledNode>} />
      </TreeNode>

    </TreeNode>
  

    <TreeNode label={<StyledNode  className='styleanimate'>{
        show?<p style={{cursor: 'pointer'}} onClick={()=>setHr(!hr)}> Department { mydatas.map( (Mdata) => (
            <option key={ Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
            } </p> </option>
        ))
        } </p>:null
        }
    </StyledNode>}>
      <TreeNode label={<StyledNode  className='styleanimate'> {
        hr?<p>{ member.map( (Ldata) => (
          <option key={ Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
          } </p> </option>
      ))
      } </p>:null
    }</StyledNode>}>

        <TreeNode label={<StyledNode  className='styleanimate'> {
        hr?<p> Department </p>:null
    }</StyledNode>} />
    <TreeNode label={<StyledNode  className='styleanimate'> {
        hr?<p> Department </p>:null
    }</StyledNode>} />
        <TreeNode label={<StyledNode  className='styleanimate'> {
        hr?<p> Employee </p>:null
    }</StyledNode>} />
      </TreeNode>

    </TreeNode>

    <TreeNode label={<StyledNode  className='styleanimate'>{
        show?<p style={{cursor: 'pointer'}}  onClick={()=>setCeo(!ceo)}> Department { mydatas.map( (Mdata) => (
            <option key={ Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
            } </p> </option>
        ))
        } </p>:null
        }
    </StyledNode>}>
      <TreeNode label={<StyledNode  className='styleanimate'> {
        ceo?<p> { member.map( (Ldata) => (
          <option key={ Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
          } </p> </option>
      ))
      } </p>:null
    }</StyledNode>}>

        <TreeNode label={<StyledNode  className='styleanimate'> {
        ceo?<p>{ employee.map( (Edata) => (
          <option key={ Edata.employeeid} value={Edata.employeeid}> <p>{Edata.Fullname
          } </p> </option>
      ))
      } </p>:null
    }</StyledNode>} />
    <TreeNode label={<StyledNode  className='styleanimate'> {
        ceo?<p> { employee.map( (Edata) => (
          <option key={ Edata.employeeid} value={Edata.employeeid}> <p>{Edata.designationname
          } </p> </option>
      ))
      }</p>:null
    }</StyledNode>} />
        <TreeNode label={<StyledNode  className='styleanimate'> {
        ceo?<p> Employee </p>:null
    }</StyledNode>} />
      </TreeNode>

    </TreeNode>

  </Tree>
                 </div>


                </div>
            </div> 
        
        </div>
    )
}

export default Orgchart;