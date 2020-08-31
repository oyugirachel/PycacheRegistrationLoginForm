import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hello {user.firstName}!</h1>
            <p>Welcome to the GreenGrocers app</p>
            <img src="https://i.postimg.cc/7Pgd0xg3/images.jpg" height="400px" width="400px"></img>
            <h2>Our Groceries</h2>
            <div class ="greens">
            <div class="veg"><img src="https://i.postimg.cc/HnsjgT5f/download.jpg"></img></div>
            <div class="veg"><img src="https://i.postimg.cc/NMrLGdPx/grapes.jpg"></img></div>
            <div class="veg"><img src="https://i.postimg.cc/tRKhy1Dh/kiwi.jpg"></img></div>
            <div class="gre"><img src="https://i.postimg.cc/5tyH81n4/mango.jpg"></img></div>
            <div class="gre"><img src="https://i.postimg.cc/zXPYVrbS/apples.jpg"></img></div>
            <div class="gre"><img src="https://i.postimg.cc/h452mPsj/guava.jpg"></img></div>
            </div>
            <style jsx>{`
        .col-lg-8 offset-lg-2{
            align-content:left;
        }
        .greens{
            display:flex;
            height:200px;
            align-items:center;
        
          
        }
        .veg {
          
        
        }
        .gre{
            
            
        }
        img {
          width: 150px;
          height:150px;
          padding:10px;
        }
      `}</style>




            
            <h3>Registered PyCache Members:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };