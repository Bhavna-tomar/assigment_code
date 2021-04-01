import React, { useEffect, useState } from "react"
import { Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'



export default function UserList() {

	const [posts, setPosts] = useState([])
	const [search, setSearch] = useState("");
	const [searchUser, setsearchUser] = useState([]);


    
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data) 
			})
	}, [])


	// search based on ID  
	const getSearchUser = (input) => {
		console.log("bhavana");
		setSearch(input)

		fetch(`https://jsonplaceholder.typicode.com/posts/${input}`)
		  .then((response) => response.json())
		  .then((data) => {
			setsearchUser(data)
			console.log("dataForSearch",data);
		  })
	  }
	


	

	const renderTableHeader = () => {
		return Object.keys(posts[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
	  }

	  const renderTableRows = () => {
		return posts.map(item => {
		  return (
			<tr style={{padding:"1rem"}} key={item.id}>
			  <td>{item.userId}</td>
			  <td>{item.id}</td>
			  <td>{item.title}</td>
			  <td>{item.body}</td>		
		  <td><Link style={{border:"1px solid gray",textDecoration:"none",padding:"2px"}} to={`UsersDetail/${item.id}`}>Details</Link> </td>	  
			</tr>
		  )
		})
	  }

	return (
		<div>
             
			<h1>GET USER DATA</h1>
			<div style={{display:"flex", justifyContent:"center", textAlign:"center", marginBottom:"2rem"}}>

			<div className="search">

              <input type="text" className="searchTerm" placeholder="Search.." onChange={e => getSearchUser(e.target.value)} />

              <button onClick={() => getSearchUser(search)} type="submit" className="searchButton">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>

            </div>

            <div style={{ position: "absolute", marginTop: "2rem", zIndex: "999", padding: "1rem"}}>

			{searchUser &&
                <div style={{display:"flex",marginBottom:"2rem", background: "white" }}>
                  <div style={{margin:"15px"}}> {(searchUser.userId)}</div>
				  <div style={{margin:"15px"}}> {(searchUser.id)}</div>
				  <div style={{margin:"15px"}}> {(searchUser.title)}</div>
</div>
}
</div>
</div>
			<div style={{padding:"1rem"}}>
			{posts.length > 0 ? 
			(

					(
						<table>
						  <thead>
							<tr>
							  {renderTableHeader()}
							</tr>
						  </thead>
						  <tbody>
							{renderTableRows()}
						  </tbody>
						</table>
					  )                     				
			) 
			: (
				<h1>Loading posts...</h1>
			)
			}
			</div>
		</div>
	)
}