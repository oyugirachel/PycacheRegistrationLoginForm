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
            <div><h1>Our Groceries</h1></div>
            <div class ="greens">
            <div class="veg">
            <p>Pinneapple</p>
            <img src="https://i.postimg.cc/g0DJgMc3/pine.jpg"></img>
            <p>Price: KES.234</p>
           
            </div>
            <div class="veg">
            <p>Oranges</p>
            <img src="https://i.postimg.cc/BZdKLVjv/oranges.jpg"></img>
            <p>Price: KES.234</p>
            
            </div>
            <div class="veg">
            <p>StrawBerry</p>
            <img src="https://i.postimg.cc/D0VwZRxk/strawberry.jpg"></img>
            <p>Price: KES.245</p>
            </div>
            <div class="gre">
            <p>Mangoes</p>
            <img src="https://i.postimg.cc/5tyH81n4/mango.jpg"></img>
            <p>Price: KES.300</p>
            </div>
            <div class="gre">
            <p>Apples</p>
            <img src="https://i.postimg.cc/zXPYVrbS/apples.jpg"></img>
            <p>Price: KES.30</p>
            </div>
            <div class="gre">
            <p>Guava</p>
            <img src="https://i.postimg.cc/h452mPsj/guava.jpg"></img>
            <p>Price: KES.50</p>
            </div>
            
            </div>
            <style jsx>{`
        .col-lg-8 offset-lg-2{
            align-content:left;
        }
        .body{
            background-color:aqua;
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




            
            {/* <h3>Registered PyCache Members:</h3>
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
            } */}
            <div>
                <Link to="/login">Logout</Link>
            </div>
        </div>
    );
}

export { HomePage };