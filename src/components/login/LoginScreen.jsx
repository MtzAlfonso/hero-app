import React from 'react';

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h1>LoginScreen</h1>
            </div>
            <div className="card-body">
              <p>Welcome!, Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-primary" onClick={handleLogin}>
                <i className="fas fa-sign-in-alt"></i> Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
