import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../actions/usersAction';


const Protected = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async function(){
        if (localStorage.getItem("taskmanagement")) {
            await dispatch(checkAuth());
        }
          setLoading(false);
    })();
  }, [dispatch]);

  const user = useSelector((state) => state.users);
  if (loading) {
    return;
  }

  return user.isAuthenticated  ? props.element : <Navigate to="/login" />;
};

export default Protected;