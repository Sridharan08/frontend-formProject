
import { useState } from 'react'
import'./register.css'
function Regform(props) {
  let[sName,setSName]=useState('');
  let[sEmail,setSEmail]=useState('');
  let[sNumber,setSNumber]=useState('');
  let[sDob,setSDob]=useState('');
  let[sCity,setSCity]=useState('');
  let[sZip,setSZip]=useState('');
  let[sState,setSState]=useState('');
  let[sJob,setSJob]=useState('');
  let[sSkills,setSSkills]=useState('');
  let[sGender,setSGender]=useState('');
  let[insertform,setInsertform]=useState(false);
  
  function isFormValid() {
    if (
      sName === '' ||
      sEmail === '' ||
      sNumber === '' ||
      sDob === '' ||
      sGender==='Choose...'||
      sCity === 'Choose...' ||
      sZip === '' ||
      sState === 'Choose...' ||
      sSkills === 'Choose...' ||
      sJob === ''
    ) {
      return false;
    }
  
    return true;
  }
  function sNameHandle(event){
    setSName(event.target.value);
    setInsertform(false)
    if (sName === '' || !/^[a-zA-Z ]{4,30}$/.test(sName)) {
      setInsertform(true)
    }
    
  }
  function sEmailHandle(event){
    setSEmail(event.target.value);
    setInsertform(false)
  }
  function sNumberHandle(event){
    setSNumber(event.target.value);
    setInsertform(false)
    if (event.target.value.length > 0 && !event.target.value.match(/^[6-9][0-9]{9}$/)) {
      setInsertform(true);
    }
  }
  function sDobHandle(event){
    setSDob(event.target.value);
    setInsertform(false)
  }
  function sCityHandle(event){
    setSCity(event.target.value);
    setInsertform(false)
  }
  function sZipHandle(event){
    setSZip(event.target.value);
    setInsertform(false)
  }
  function sJobHandle(event){
    setSJob(event.target.value);
    setInsertform(false)
  }
  function sStateHandle(event){
    setSState(event.target.value);
    setInsertform(false)
  }
  function sSkillsHandle(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSSkills([...sSkills, value]);
    } else {
      setSSkills(sSkills.filter((skill) => skill !== value));
    }
    setInsertform(false);
  }
  function sGenderHandle(event){
    setSGender(event.target.value);
    setInsertform(false)
  }
  function saveForm(event){
    event.preventDefault();
    if (!isFormValid()) {
      setInsertform(true);
      return;
    }
    

    if (sEmail === '' || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(sEmail)) {
      return;
    }
  
    let Form={
      Name:sName,
      email:sEmail,
      number:sNumber,
      date_of_birth:sDob,
      gender:sGender,
      city:sCity,
      state:sState,
      zip:sZip,
      job_desc:sJob,
      skills:sSkills
    }
    
    //console.log(Form);
    props.setforms(Form)
     setSName('');setSEmail('');setSDob('');setSCity('');setSState('');setSZip('');
     setSSkills('');setSJob('')
    setInsertform(props.insertform);
     
   
 
  }
  return(

<section className="register-block" onSubmit={saveForm}>
  <div className="container">
    <div className="row ">
      <div className="col register-sec">
        <h2 className="text-center">Register Now</h2>
        <form   className="register-form" action="" >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
            <input type="text" className="form-control" name="name" id="sName" pattern="[a-zA-Z ]{4,30}" value={sName} onChange={sNameHandle} placeholder="Enter your Name" required />
            <div name="name" onChange={sNameHandle}>
            {insertform && sName === '' && (
                  <div>
                    <label className="text-danger">Name is required</label>
                  </div>
                )}
                {insertform && sName.length > 0 && !sName.match(/^[a-zA-Z ]{4,30}$/) && (
                  <div>
                    <label className="text-danger">
                      Name should have 4-30 alphabets and spaces only
                    </label>
                  </div>
                )}
            </div>
          </div><br/>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                  <input type="text"  className="form-control" name="email" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" id="sEmail" value={sEmail} onChange={sEmailHandle} placeholder="Enter your Email" required />
                  <div name="email" onChange={sEmailHandle}>
                      {insertform && sEmail === '' && (
                    <div>
                      <label className="text-danger">Email is required</label>
                    </div> )}
                    {insertform && sEmail.length > 0 && !sEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                ) && (
                  <div>
                    <label className="text-danger">
                      Email should be in a valid format
                    </label>
                  </div>
                )}
                  </div>
               </div><br/>
               <div className="row g-3">
                <div className="col-md-8">
                  <label htmlFor="exampleInputNumber" className="text-uppercase">Mobile Number</label>
                  <input type="tel" className="form-control" name="number" id="sNumber" pattern="^[6-9][0-9]{9}$" value={sNumber} onChange={sNumberHandle} placeholder="Enter your Number" />
                  <div name="number" onChange={sNumberHandle}>
                      {insertform && sNumber === '' && (
                    <div>
                      <label className="text-danger">Number is required</label>
                    </div> )}
                    {insertform && sNumber.length > 0 && !sNumber.match(/^[6-9][0-9]{9}$/) && (
                      <div>
                        <label>Number should have 0-9 digits starting with 6-9</label>
                      </div>
                      )}
                  </div>
                  </div><br/>
                  <div className="col-md-4">
                    <label htmlFor="inputDob" className="text-uppercase">Date Of Birth</label>
                    <input type="date" className="form-control" name="dob" min="1990-01-01" max="2003-12-31" id="sDob" value={sDob} onChange={sDobHandle}></input>
                    <div name="dob" onChange={sDobHandle}>
                      {insertform && sDob === '' && (
                      <div>
                          <label className="text-danger">Date Of Birth is required</label>
                    </div>
                      )}
                    {insertform && sDob > '2003-12-31' && (
                    <div>
                      <label className="text-danger">Date Of Birth should not be later than 2003-12-31</label>
                    </div>
                      )}
                </div>
                </div>
              </div>
              <br/>
              <div className="col-md-12">
                <label htmlFor="inputState" className="text-uppercase">Gender</label>
                <div onChange={sGenderHandle}>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="sGender-Male" value="Male" />
                    <label className="form-check-label" htmlFor="sGender-Male"> Male </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="sGender-Female" value="Female" />
                      <label className="form-check-label" htmlFor="sGender-Female"> Female </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="sGender-Other" value="Other" />
                        <label className="form-check-label" htmlFor="sGender-Other"> Other </label>
                        </div>
                        </div>
                        <div name="gender" onChange={sGenderHandle}>
                          {insertform && sGender === '' &&
                          ( <div> <label className="text-danger">Gender is required</label> </div>
                          )}
                          </div>
                          </div>
                      <br/>
               <div className='row g-3'>
                <div className="col-md-4">
                <label htmlFor="inputCity" className="text-uppercase">City</label>
                  <select  name="city" className="form-select" id="sCity" value={sCity} onChange={sCityHandle}>
                      <option defaultValue>Choose...</option>
                      <option>Ukkadam</option>
                      <option>GandhiPuram</option>
                      <option>Veerapandi</option>
                  </select>
                  <div name="city" onChange={sCityHandle}>
                      {insertform && sCity === '' && (
                    <div>
                      <label className="text-danger">City is required</label>
                    </div> )}
                  </div>
                  
                </div>
              <div className="col-md-4">
                  <label htmlFor="inputState" className="text-uppercase">State</label>
                  <select  name="state" className="form-select" id="sState" value={sState} onChange={sStateHandle}>
                      <option defaultValue>Choose...</option>
                      <option>Tamilnadu</option>
                      <option>Karanataka</option>
                      <option>Kerala</option>
                  </select>
                  <div name="state" onChange={sStateHandle}>
                      {insertform && sState === '' && (
                    <div>
                      <label className="text-danger">State is required</label>
                    </div> )}
                  </div>
              </div>
            <div className="col-md-4">
                  <label htmlFor="inputZip" className="text-uppercase">Zip</label>
                  <input type="number" className="form-control" name='zip' id="sZip" value={sZip} onChange={sZipHandle}placeholder="Enter Zip code"/>
                  <div name="zip" onChange={sZipHandle}>
                      {insertform && sZip === '' && (
                    <div>
                      <label className="text-danger">Zip is required</label>
                    </div> )}
                  </div>
            </div>
            </div><br/>
            <div className="col-md-12">
              <label htmlFor="inputState" className="text-uppercase">Skills</label>
              <div onChange={sSkillsHandle}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="skills" value="React" id="sSkills-React" />
                  <label className="form-check-label" htmlFor="sSkills-React"> React </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="skills" value="Node.js" id="sSkills-Node.js" />
                    <label className="form-check-label" htmlFor="sSkills-Node.js"> Node.js </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="skills" value="MongoDB" id="sSkills-MongoDB" />
                      <label className="form-check-label" htmlFor="sSkills-MongoDB"> MongoDB </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="skills" value="Express" id="sSkills-Express" />
                        <label className="form-check-label" htmlFor="sSkills-Express"> Express </label>
                        </div>
                        </div>
                        <div name="skills" onChange={sSkillsHandle}>
                          {insertform && sSkills.length === 0 &&
                          ( <div> <label className="text-danger">Skills is required</label>
                          </div> 
                          )} 
                          </div>
                          </div> <br/>  
                      <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="text-uppercase">Job Description</label>
                  <textarea type='textarea' className="form-control" name='jobdesc' id="sJob" value={sJob} onChange={sJobHandle} rows="3"placeholder="Description"/>
                  <div name="jobdesc" onChange={sJobHandle}>
                      {insertform && sJob === '' && (
                    <div>
                      <label className="text-danger">Job Description is required</label>
                    </div> )}
                  </div>
              </div><br/>
                <div className="form-group">               
                  <input type="submit" className="btn"   value="Register"/>
               </div>
            </form>
        </div>
      </div>
  </div>
</section>
      
    )
    
}
export default Regform