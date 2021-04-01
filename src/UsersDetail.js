import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const UsersDetail = (props) => {

  const [posts, setPosts] = useState({});

  useEffect(() => {


    const paramsId = props.match.params.userId;

    fetch(`https://jsonplaceholder.typicode.com/posts/${paramsId}`)

      .then((response) => response.json())
      .then((data) => {

        setPosts(data)
      })

  }, []);


  const renderTableRows = () => {
    return posts &&
      Object.keys(posts).map(element => {
        return <tr key={element}>

          <div style={{ marginTop: "2rem" }}>
            <td><span style={{ fontWeight: "bold",padding:"1rem"}}>{element}</span>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
            <td>{posts[element]}</td>
          </div>
        </tr>;


      })
  }



  return (
    <div>
      {/* {posts && 

<div style={{display:"flex"}}>
         <div><span style={{fontWeight:"bold"}}>UserId &nbsp;&nbsp;:&nbsp;&nbsp;</span>{posts.userId} </div><br/>
         <div><span style={{fontWeight:"bold"}}>Id &nbsp;&nbsp;:&nbsp;&nbsp;</span>{posts.id} </div><br/>
         <div><span style={{fontWeight:"bold"}}>Title &nbsp;&nbsp;:&nbsp;&nbsp;</span>{posts.title} </div><br/>
         <div><span style={{fontWeight:"bold"}}>Body &nbsp;&nbsp;:&nbsp;&nbsp;</span>{posts.body} </div>


</div>
} */}
      <table>
        <tbody>

          {
            renderTableRows()
          }

        </tbody>
      </table>

    </div>
  );
}

export default UsersDetail;