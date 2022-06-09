import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProjectAction } from '../../redux/actions/projects/projectActions';



const AddProject= ({history}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [manager, setmanager] = useState('');
  const [status, setStatus] =useState('');

  //dispatch
  const dispatch = useDispatch();

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();

    
    dispatch(createProjectAction(title,manager,category,status));
    history.push('/');
  
  };
  

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to add project
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Project
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add Project</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='form-group'>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className='custom-select'>
                         <option defaultValue="entertainment">
                            entertainment
                          </option>
                          <option value="ecommerce">ecommerce</option>
                          <option value="travelling">travelling</option>
                          <option value="education">eduction</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>manager </label>
                        <input
                          value={manager}
                          onChange={e => setmanager(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='manager name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>status </label>
                        <input
                          value={status}
                          onChange={e => setStatus(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='status'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>title</label>
                        <input
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Project title'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Project
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
