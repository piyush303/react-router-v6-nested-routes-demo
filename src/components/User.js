import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
	return (
		<>
			<h2>User</h2>

			<nav>
				<Link to="profile">Profile</Link>
				<Link to="transactions">Transactions</Link>
			</nav>

			<Outlet />
		</>
	)
}

export default User;