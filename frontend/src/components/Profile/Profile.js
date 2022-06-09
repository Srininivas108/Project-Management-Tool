import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import pic from "../../assets/img/bookpic.jpg";
import { getUserProfileAction } from "../../redux/actions/users/usersActions";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  return (
    <>
      {error && <h2>{error}</h2>}
      {loading ? (
        <h3>loading</h3>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <div className="card m-auto " style={{ width: "50%" }}>
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user?.email}</h5>
                  <p className="card-text">{user?.name}</p>
                  <Link to="/user-update" className="btn btn-primary">
                    Update your profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {loading ? <h1>Loading wait</h1>:<table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Manager</th>
            <th scope="col">Project Name</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
            {user?.projects.map(project =>(
              <tr className="table-dark">
              <th scope="row">{project.manager}</th>
              <td>{project.title}</td>
              <td>{project.status}</td>
              <td>Delete</td>
              <td>Update</td>
            </tr>
            ))}
        </tbody>
      </table>
      }
    </>
  );
};

export default Profile;
