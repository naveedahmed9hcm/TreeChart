import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import { Menu } from "antd";
import axios from 'axios';
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Role() {

    const [mydatas, setMydata] = useState([]);

    const [designate, setDesignate] = useState ([])
    const [role, setRole] = useState ([])
    const [Response, setReponse] = useState ([])
    const [active, setActive] = useState ([])

    const handleDesigSelect = (event) => {
      setDesignate(event.target.value)
    }

    const handleInputRole = (event) => {
      setRole(event.target.value)
  }

    const handleInputRespon = (event) => {
      setReponse(event.target.value)
  }

    const handleInputActive = (event) => {
      setActive(event.target.value)
  }
      const handlePostData = async (event) => {
        var data ={
          'Designationid': designate,
          'roles': role,
          'responsibility': Response ,
          'activity': active,
      }
        try {
          const result = await postData( "/RoleResponsibilities/CreateRole",data);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        alert("Submitted")
      };

      // Get Integration
      
      const getApidata = async() => {
        const res = await axios.get("http://localhost:5247/api/RoleResponsibilities/Getdesignation");
            setMydata(res.data.Response)
        } 
        console.log(mydatas);
          useEffect(() => {
            getApidata();
          }, []);

  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
    const navigate = useNavigate();
    // Dark Mode Color
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
  }, ], },
  ]}
  className='labelside'
  >
</Menu>
<ul>

<li> <Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> </li>

<li> <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> </li>

<li> <Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> </li>

<li> <Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> </li>

<li> <Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> </li>

</ul> </div> </div> </div>  </div>

                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
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
              
                    <h2> Role & Responsibilities </h2>
<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Designation</label>
            <select className='sect' onChange={handleDesigSelect}>
            { mydatas.map( (Ddata) => (
            <option key={ Ddata.Designationid} value={Ddata.Designationid}> {Ddata.designationName} </option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Role</label>
                <input type="text" className="form-control" onChange={handleInputRole} id='roles'
                    />
            </div>  
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Responsibility</label>
                <input type="text" className="form-control" onChange={handleInputRespon} id='responsibility'
                  />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Activity</label>
                <input type="text" className="form-control" onChange={handleInputActive} id='activity'
                  />
            </div>
        </div>
    </div>
</div>
<button onClick={handlePostData}  type='submit' className='Tbtn'>Save</button>
     </div>
</div>
        </div>
    )
}
export default Role;