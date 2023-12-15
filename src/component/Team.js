import React,  { useState, useEffect } from 'react';
import axios from "axios";
import { fetchData, postData } from '../HttpService/HttpService'
import { Menu } from "antd";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Team() {
const [mydatas, setMydata] = useState([]);

const [getteam, setGetteam] = useState ([])
const [tname, setTname] = useState ([])
const [tlead, setTlead] = useState ([])

const handleteamSelect = (event) => {
  setGetteam(event.target.value)
}

const handleInputname = (event) => {
  setTname(event.target.value)
}

const handleInputlead = (event) => {
  setTlead(event.target.value)
}

      const handlePostData = async (event) => {    
        var data ={
          'Projectid': getteam,
          'teamname': tname,
          'teamlead': tlead,
      }

        try {
          const result = await postData( "/TeamInformation/CreateTeamInformation",data);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        alert("Submitted")
      };
      // Get Integration 
      const getApidata = async() => {
      const res = await axios.get("http://localhost:5247/api/TeamInformation/GetAllProject");
          setMydata(res.data.Response)
      } 
      console.log(mydatas);
        useEffect(() => {
          getApidata();
        }, []);

        // Integration Team Detail

    const [Mydatas, setMydataa] = useState([]);

    const [details, setDetails] = useState ([])
    const [join, setJoin] = useState ([])
    const [end, setEnd] = useState ([])
    const [joinreason, setJoinreason] = useState ([])
    const [endreason, setTEndreason] = useState ([])

    const handledetailSelect = (event) => {
      setDetails(event.target.value)
    }

    const handleInputjoin = (event) => {
      setJoin(event.target.value)
    }

    const handleInputend = (event) => {
      setEnd(event.target.value)
    }

    const handleInputreason = (event) => {
      setJoinreason(event.target.value)
    }

    const handleInputendres = (event) => {
      setTEndreason(event.target.value)
    }

    const handlePostDatas = async (event) => {

      var team ={
        'Teamid': details,
        'teammemberjoindate': join,
        'teammemberenddate': end,
        'teammemberjoinreason': joinreason,
        'teammemberendreason': endreason,
    }

        try {
          const result = await postData( "/TeamDetail/CreateTeamDetailInformation",team);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        alert("Submitted")
      };

         // Get Integration

          const getApidatas = async() => {
          const ress = await axios.get("http://localhost:5247/api/TeamDetail/GetAllteam");
              setMydataa(ress.data.Response)
          } 
          console.log(mydatas);
            useEffect(() => {
              getApidatas();
            }, []);
 
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
             Role & Responsibility
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
<li>
<Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> 
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
</ul>  </div>  </div>  </div>  </div>
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
               
                    <h2> Team  </h2>
<div className="">
    <div className="row">
         <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Team</label>
            <select className='sect' onChange={handleteamSelect}>
            { mydatas.map( (Mdata) => (
            <option key={ Mdata.Projectid} value={Mdata.Projectid}> <p>{Mdata.Projectname} </p></option>
        ))
        }
        </select>
            </div>
        </div>
  
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Name</label>
                <input type="text" className="form-control" onChange={handleInputname} id='teamname' required  />
            </div>
        </div>  
       
    </div>
</div>

<div className="">
    <div className="row">
         <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Lead</label>
                <input type="text" className="form-control" onChange={handleInputlead} id='teamlead' required  />
            </div>
        </div>
       
    </div>
</div>

<button onClick={handlePostData} type='submit' className='Tbtn'>Save</button>

      <h2 className='teamheading'> Team Detail </h2>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Team Detail</label>
            <select className='sect'  onChange={handledetailSelect}>
            { Mydatas.map( (Medata) => (
            <option key={ Medata.Teamid} value={Medata.Teamid}> <p>{Medata.Teamname} </p></option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Member Join Date</label>
                <input type="date" className="form-control" onChange={handleInputjoin} id='teammemberjoindate'
                   required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Member End Date</label>
                <input type="date" className="form-control" onChange={handleInputend} id='teammemberenddate'
                   />
            </div>
        </div> 

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Member Join Reason</label>
                <input type="text" className="form-control" onChange={handleInputreason} id='teammemberjoinreason'
                   />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Member End Reason</label>
                <input type="text" className="form-control" onChange={handleInputendres} id='teammemberendreason'
                   />
            </div>
        </div>
    </div>
</div>
<button onClick={handlePostDatas} type='submit' className='Tbtn'>Save</button>
</div>
</div>
        </div>
    )
}
export default Team;