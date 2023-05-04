import React from 'react'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function logout(){
        localStorage.removeItem('currentUser')
        window.location.href='/login'
    }
    // console.log(user)
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="#">VESTA ROOMS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa fa-bars" style={{color:'white'}}></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {user ? (
                        <>
                         <div class="dropdown " >
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class='fa fa-user' style={{marginRight:'10px'}}></i>{user.data.name}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <a class="dropdown-item" href="/profile">Profile</a>
                                        <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                        
                                    </ul>
                                </div>
                         </>
                         ) : (
                         <>

                            <li class="nav-item ">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>

                        </>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
