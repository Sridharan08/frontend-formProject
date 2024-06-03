import './Info.css'
function Info(props){
    console.log(props.det);
    function deleteAForm(id){
        // console.log(id);
        props.getFormID(id)
    }
    return(
    <div>
        <table className="t1 t3" >
        <thead>
            <tr className="t1 t3">
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Date Of Birth</th>
                <th>Gender</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Skills</th>
                <th>JobDesc</th>    
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                props.det.map(s=>{
                   return(     
                        <tr className="t2" key={s._id}>
                            <td>{s.Name}</td>
                            <td>{s.email}</td>
                            <td>{s.number}</td>
                            <td>{s.date_of_birth}</td>
                            <td>{s.gender}</td>
                            <td>{s.city}</td>
                            <td>{s.state}</td>
                            <td>{s.zip}</td>
                            <td>{s.skills}</td>
                            <td>{s.job_desc}</td>
                            <td>
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteAForm(s._id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
            
            </tbody>
        </table>
    </div>
    )
    }
export default Info