import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [formStatus, setFormStatus] = useState(0);
	const [name, setName] = useState();
	const [divorceId, setDivorceId] = useState();
	const [date, setDate] = useState();
	const [nationality, setNationality] = useState();
	const [allData, setAllData] = useState([]);

	//Form 1 Function//

	const form1Submit = () => {
		var allentries = [{}];
		var allentries = JSON.parse(localStorage.getItem("all data"));
		if (allentries == null) allentries = [];

		var name = document.getElementById("name").value;
		var divorceId = document.getElementById("divorceId").value;

		setFormStatus(1);
		setName(name);
		setDivorceId(divorceId);
		let data = { name, divorceId };
		allentries.push(data);
		localStorage.setItem("all data", JSON.stringify(allentries));
	};

	//Form 2 Function//

	const form2Submit = () => {
		var allentries = [{}];
		var allentries = JSON.parse(localStorage.getItem("all data"));
		if (allentries == null) allentries = [];
		var date = document.getElementById("date").value;
		var nationality = document.getElementById("nationality").value;

		setFormStatus(2);
		setDate(date);
		setNationality(nationality);
		let data = { name, divorceId, date, nationality };
		allentries.pop();
		allentries.push(data);
		localStorage.setItem("all data", JSON.stringify(allentries));
	};

	//Form 3 Function//

	const form3Submit = (async) => {
		var allentries = [{}];
		var allentries = JSON.parse(localStorage.getItem("all data"));
		if (allentries == null) allentries = [];
		var maritalStatus = document.getElementById("maritalStatus").value;
		var qualification = document.getElementById("highestQual").value;

		let data = {
			name,
			divorceId,
			date,
			nationality,
			maritalStatus,
			qualification,
		};
		allentries.pop();
		allentries.push(data);
		localStorage.setItem("all data", JSON.stringify(allentries));

		getdata();

		setFormStatus(3);
	};

	//Getting all entries from local storage

	const getdata = () => {
		setAllData(JSON.parse(localStorage.getItem("all data")));
	};

	return (
		<div className='App'>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "700px",
					textAlign: "left",
					backgroundColor: "#fff9",
				}}
			>
				{/* Form 1 */}

				{formStatus == 0 ? (
					<>
						<label htmlFor='name'>Name</label>
						<input type='text' placeholder='Enter Your Name' id='name' />
						<label for='divorceId'>State issued Divorce Id :</label>
						<input
							type='text'
							placeholder='Enter Your State issued Divorce Id :'
							id='divorceId'
						/>
						<button id='button1' onClick={form1Submit}>
							NEXT
						</button>
					</>
				) : null}

				{/* form 2 */}

				{formStatus == 1 ? (
					<>
						<label for='date'>Date :</label>
						<input type='date' id='date' />
						<label for='nationality'>Nationality</label>
						<input type='text' id='nationality' />
						<button id='button2' onClick={form2Submit}>
							Next
						</button>
					</>
				) : null}

				{/* form 3 */}

				{formStatus == 2 ? (
					<>
						<label for='maritalStatus'>Marital Status</label>
						<select id='maritalStatus'>
							<option></option>
							<option>Single</option>
							<option>Married</option>
							<option>Prefer Not to say</option>
						</select>
						<label for='highestQual'>Highest Qualification</label>
						<input type='text' id='highestQual' />
						<button id='button3' onClick={form3Submit}>
							Submit
						</button>
					</>
				) : null}

				{/* Table of all entries */}

				{formStatus == 3 ? (
					<>
						<div id='table'>
							Table Data : <br />
							<table
								style={{ textAlign: "center", border: 1, borderStyle: "solid" }}
							>
								<tr>
									<th>Name</th>
									<th>Divorce Id</th>
									<th>Date</th>
									<th>Nationality</th>
									<th>Marital Status</th>
									<th>Highest Qualification</th>
								</tr>
								{allData.map((user) => {
									return (
										<tr>
											<td> {user.name}</td> <td> {user.divorceId}</td>
											<td> {user.date}</td> <td>{user.nationality}</td>
											<td> {user.maritalStatus}</td>{" "}
											<td>{user.qualification}</td>
										</tr>
									);
								})}
							</table>
						</div>
					</>
				) : null}
			</div>
			{formStatus != 3 ? (
				<h3
					onClick={() => {
						getdata();
						setFormStatus(3);
					}}
					style={{ cursor: "pointer" }}
				>
					View All Entries
				</h3>
			) : null}
		</div>
	);
}

export default App;
