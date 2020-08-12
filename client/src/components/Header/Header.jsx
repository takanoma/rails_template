import React from 'react';
import {push} from "connected-react-router"
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    return (
      <div>
          <ul className="header">
              <li><a onClick={() => dispatch(push('/'))}>Home</a></li>
              <li><a onClick={() => dispatch(push('/login'))}>Login</a></li>
          </ul>
      </div>
    );
}

export default Header