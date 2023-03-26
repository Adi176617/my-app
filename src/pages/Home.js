import React from 'react';
const Home = () => {
	
return (
	<>
		<h1 style={{color:"green"}}>
			Welcome to GeeksForGeeks {process.env.REACT_APP_VERSION} {process.env.REACT_APP_ENV}</h1>
	</>
)
};

export default Home;
