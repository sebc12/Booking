import ErrorPage from "./ErrorPage";

export default function Routing() {

    return (
      <div>
        <h1>Routing root</h1>
        
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="signup" element={<Signup />} />
            
  
            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    );
  }