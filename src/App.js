import './App.css';
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect, useAuthActions } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react'

function App() {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();
  const loginWithRedirect = useLoginWithRedirect();
  const handleClick = () => {
    AdminPortal.show();
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  const showTenant = () => {
    alert(user
      .tenantIds);
  }
  const handleSwitchTenant = () => {
    switchTenant({ tenantId: 'new-tenant-id' });
  };
  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <label for="user_tenants_dropdown">user type: </label>

            <select name="user_tenants_dropdown">{user.tenants.map((item) => {
              return (
                <option>{item.roles}
                </option>
              )
            })}
            </select>
          </div>
          <div> <button onClick={handleSwitchTenant}>Select</button></div>
          <div>
            <button onClick={() => showTenant()}>
              What is the tenant I'm on right now?
            </button>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button style={{ border: "red solid 2px" }} onClick={() => logout()}>Click to logout</button>
          </div>
          <div><button onClick={handleClick}>Settings</button></div>
        </div>
      ) : (
          <div>
            <button onClick={() => loginWithRedirect()}>go to login
            </button>
          </div>
        )}
    </div>
  );
}

export default App;