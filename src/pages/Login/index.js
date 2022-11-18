import React, { useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Container }from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { authLoginApi } from "../../features/loginSlice";


const Login = () => {
    const dispatch = useDispatch();

    const [Username, setUsername] = useState("") 
    const [Password, setPassword] = useState("") 

    const handleUsername = (inputUsername) => {
        setUsername(inputUsername)
    }
    const handlePassword = (inputPassword) => {
        setPassword(inputPassword)
    }
    const doSubmit = (event) => {
        event.preventDefault();
        dispatch(authLoginApi({ Username, Password }));
        setUsername("");
        setPassword("");
      };
      

    return(
        <Container>
            <section className="text-center">
            <div className="p-5 bg-image"
                    ></div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" >
                <div className="card-body py-5 px-md-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                    <h2 className="fw-bold mb-5">
                        <ReactTypingEffect 
                            text={["Halaman Login", "silahkan masukan Username dan Password"]}
                            speed={100}
                            eraseDelay={800}
                            eraseSpeed={100}
                            typingDelay={100}
                            />
                    </h2>
                    <form onSubmit={doSubmit}>
                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control" 
                        required 
                        onChange={(event) => handleUsername(event.target.value)} 
                        value={Username}/>
                        <label className="form-label" for="form3Example3">Username</label>
                        </div>
                        <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" 
                        required 
                        onChange={(event) => handlePassword(event.target.value)}
                        value={Password}/>
                        <label className="form-label" for="form3Example4">Password</label>
                        </div>
                        <button type="submit" value="Login" className="btn btn-primary btn-block mb-4">
                        Sign in
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </Container>
    );
}

export default Login