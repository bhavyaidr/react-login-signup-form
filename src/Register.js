	import React, {Component} from "react"
	import "./App.css"




	class App extends Component{

		constructor(){
			super();
			this.state={ 
				firstName:"", 
				lastName:"",
				email:"", 
				password:"" 
			}
		}
		handleChange = event =>
		{
			this.setState(
			{ 
				[event.target.name]:event.target.value })
		    }

		handleSubmit = event =>
		{
			event.preventDefault();
			console.log("Email : " + this.state.email)
	        console.log("Password : " + this.state.password)

			const url ="https://4b3f9efe-a4aa-4424-bbfb-ac15febcdd78.mock.pstmn.io/demo"
			const data = { 
				firstName:this.state.firstName, 
				lastName:this.state.lastName, 
				email:this.state.email, 
				password:this.state.password }

				fetch(url, 
					{ 
						method: "POST", 
						body: JSON.stringify(data), 
						headers:{ "Content-Type": "application/json" } 
				})
				.then(res => res.json())
				.catch(error => console.error("Error:", error))
				.then(response => console.log("Success:", response)); 
			}

			render(){
				return(

					<div className="app">

					<div className="form-app">
					<h1>Create Account</h1>
					<form onSubmit={this.handleSubmit}>
					<div className="firstName">
					<label htmlFor="firstName">First Name</label>
					<input 
					type="text" 
					className="" 
					placeholder="First Name" 
					
					name="firstName" 
										onChange={this.handleChange}
					/>
					</div>

					<div className="lastName">
					<label htmlFor="lastName">Last Name</label>
					<input 
					type="text" 
					className="" 
					placeholder="Last Name" 
					
					name="lastName" 

					onChange={this.handleChange}
					/>
					</div>

					<div className="email">
					<label htmlFor="email">Email</label>
					<input 
					type="email" 
					className="" 
					placeholder="email" 
					
					name="email" 

					onChange={this.handleChange}
					/>
					</div>

					<div className="password">
					<label htmlFor="password">Password</label>
					<input 
					type="password"
					className="" 
					placeholder="password" 
					 
					name="password" 

					onChange={this.handleChange}
					/>
					</div>

					<div className="createAccount">
					<button type="submit">Create Account</button>
					<small>Already Have An Account?</small>

					</div>




					</form>
					</div>
					</div>


					)
				}

			}
			export default App;