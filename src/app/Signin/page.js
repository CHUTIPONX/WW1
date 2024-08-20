export default function Page() {
  return (
    <>
      <div 
        style={{ 
          backgroundImage: 'url(/assets/img/F.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <div className="card shadow-lg border-light animate-card">
            <div className="card-header text-center text-dark">
              <h5 className="mb-0">Sign In</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0">
                      <i className="bi bi-person"></i>
                    </span>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingUsername"
                        placeholder="Username"
                      />
                      <label htmlFor="floatingUsername">Username</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0">
                      <i className="bi bi-key"></i>
                    </span>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success w-100">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
