import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAction} from '../../redux/actions/projects/projectActions';

import Loading from '../Loading/Loading';


const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchProjectsAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { projects, loading } = useSelector(state => {
    return state.projectsList;
  });
  console.log(projects);
  console.log(loading);

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Manager</th>
                <th scope='col'>Project Name</th>
                <th scope='col'>Action</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {projects &&
                    projects.map(project=> {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className='table-dark'>
                            <th scope='row'>{project.title}</th>
                            <td>{project.manager}</td>
                            <td>
                              <i
                                className='fas fa-trash '
                                style={{
                                  color: 'red',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                            <td>
                              <i
                                className='far fa-edit'
                                style={{
                                  color: 'yellow',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;