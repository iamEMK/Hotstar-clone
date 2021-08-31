import styled from 'styled-components';
import {auth, provider} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import {useEffect} from 'react';
function Header() {
  const history = useHistory();
  const [ user ] = useAuthState(auth);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        history.push("/home");
      }
    });
  }, [user]);
  const handleAuth = () =>{
      auth.signInWithPopup(provider).then(result =>
        console.log(result)
          ).catch(
        error => alert(error.message)
      )
  }
console.log(user);
    return (
        <Nav>
            <Logo to="/home">
                <img src="/images/logo.svg" alt=""/>
            </Logo>
            {
              !user ?  <Login onClick={handleAuth}> LOGIN</Login>:
              <>
              <NavMenu>
              <a href="/home">
              <img src="/images/home-icon.svg" alt=""/>
              <span>HOME</span>
              </a>
              <a href="/home">
              <img src="/images/search-icon.svg" alt=""/>
              <span>SEARCH</span>
              </a>
              <a href="/home">
              <img src="/images/watchlist-icon.svg" alt=""/>
              <span>WATCHLIST</span>
              </a>
              <a href="/home">
              <img src="/images/original-icon.svg" alt=""/>
              <span>ORIGINALS</span>
              </a>
              <a href="/home">
              <img src="/images/movie-icon.svg" alt=""/>
              <span>MOVIES</span>
              </a>
              <a href="/home">
              <img src="/images/series-icon.svg" alt=""/>
              <span>SERIES</span>
              </a>
          </NavMenu>
          <SignOut>
          <UserImg src={user.photoURL} alt={user.displayName} />
          <DropDown>
            <span onClick={()=>auth.signOut().then(
              history.push('/')
            )}>SIGN OUT</span>
          </DropDown>
        </SignOut>

              </>
            }
           
         
            
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled(Link)`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;

  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

 @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.span`
border-radius: 5px;
border: 1px solid #000;
font-size: 18px;
cursor: pointer;
background: transparent;
letter-spacing: 1.5px;
font-weight: normal;
padding: 8px 15px;
transition: all 0.3s ease 0s;

  &:hover{
    background: #fff;
    color: #000;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  user-select: none;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  cursor: pointer;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;