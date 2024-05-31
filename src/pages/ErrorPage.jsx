import { NavLink } from "react-router-dom"


const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <NavLink to="/" className="font-bold hover:underline">Go to Home</NavLink>
        </div>
    )
}

export default ErrorPage