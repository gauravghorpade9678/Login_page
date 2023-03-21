import React  from "react";
import "./Stylelogin.css";



export default function Login(){
    return(
        <>
      <div className="box">
        <img src="logo512.png" alt=""  width="110px" className="img_logo"/>
<div className="row">
  <div className="col-12">
    <p style={{'textAlign':'center'}}>SOME RANDOM REXT SOME <br />RANDOM SOME RANDOM REXT SOME</p>
  </div>
</div>

<div className="container">
<div className="row">
  <div className="col-6 " >
    <button className="btn btn-white ml-5 ">Login</button>
    <hr  className="" style={{'backgroundColor':'#e70b89'}}/>
  </div>
  <div className="col-6 btn">
    <button className="btn btn-white">Signup</button>
  </div>
</div>

<div className="row">
  <div className="col-12">
    <input type="Email"  className="rounded-pill p-1 ml-5" placeholder="Email Address" style={{width: '70%'}} />
    <input type="text"  className="rounded-pill mt-3 p-1 ml-5" placeholder="Password" style={{width: '70%'}} />
  </div>
</div>

        <div className="row">
           <div className="col-12">
             <button className="mt-3 btn ml-5 rounded-pill" style={{'width':'70%','backgroundColor':'#e70b89'}}> LOGIN</button>
           </div>
        </div>
<button  className="btn btn-none" style={{'marginLeft':'200px' ,'color':'#e70b89','fontSize':'13px'}}>Forgot Password</button>

<p className="text-center " style={{'fontSize':'10px'}}> Or login with </p>




<div  >
     <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000" alt="" style={{height:"40px",width:"40px",borderRadius:"50%",background:"black",marginLeft:"90px"}}/> 
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmmyaF8XY5iLsfHjYZ4JIp5m-jHlQHzbMmKAJ_4Cd&s" alt="" style={{height:"40px",width:"40px",borderRadius:"50%",background:"black",marginLeft:"30px"}}/>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_1GZ8k3_TQE3kYbp-HYI4Q0OVjBivy2MEQ&usqp=CAU" alt=""style={{height:"40px",width:"40px",borderRadius:"50%",background:"black",marginLeft:"30px"}} />
    
</div>






 

<p className="mt-4" style={{fontSize:'11px', marginLeft:"100px"}}>Dont have account <span style={{color:"#e70b89"}}>Create new now!</span> </p>
<p className="mt-4" style={{fontSize:'11px', marginLeft:"50px"}}>By using up, you are agreewith our<span style={{color:"#e70b89"}}>Terms & Conditions</span> </p>

  {/* <NavLink to={''} className="btn btn-danger">Creat New Account Now!</NavLink> */}


</div>
      </div>
        </>
    )
}