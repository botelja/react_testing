import React, { ChangeEvent } from 'react';

interface CreateUserProps {
  onChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  createUser: () => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onChangeForm, createUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create User</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  onChange={onChangeForm}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  onChange={onChangeForm}
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={onChangeForm}
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>
            <button type="button" onClick={createUser} className="btn btn-danger">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
