const UserData=[
  {
    name:"K Karthick",
    city:"Sivakasi",
    description:"Java Full Stack Developer",
    skills:["Java","Html","Css","JavaScript","React Js","Sql","Spring Boot","J2ee"],
    online:true,
    profile:"image/2.jpg",
  },
  {
    name:"Veera Kumar",
    city:"Rajapalayam",
    description:"Python Full Stack Developer",
    skills:["Python","Html","Css","JavaScript","Sql"],
    online:true,
    profile:"image/3.jpg",
  },
  {
    name:"ArunKumar",
    city:"Rajapalayam",
    description:"PythonFull Stack Developer",
    skills:["Python","Html","Css","JavaScript","Sql"],
    online:true,
    profile:"image/4.jpg",
  }
]



function User(props){
    return <div className="card-continers"> 
    <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
    <img src={props.profile} alt=""  style={{ height:150,}} className="img"/>
    <h3> {props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
      <button className="primary">message</button>
      <button className="primary-outline">Following</button>
    </div>
    <div className="skills">
      <h6>skills</h6>
      <ul>
      {
        props.skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))
      }
      </ul>
    </div>
    </div>
    

}
const UserCard = () => {
  return (
    <>
    {UserData.map((user,index)=>(
      <User key={index} 
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}
      />
    ))
    }
    </>
  )
}


export default UserCard