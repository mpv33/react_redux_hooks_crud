import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getTutorialState } from '../../store/tutorial/selector'
import { getAll, remove } from "../../services/TutorialService";
const TutorialHome = () => {
  // const { contacts, deleteContact } = props
  // const contacts =useSelector((state:any) => state)
  const contacts = useSelector(getTutorialState)
  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getAll())

  }, [dispatch,contacts]);

  const deleteContact = (id: any) => {
    dispatch(remove(id))
    toast.success("Tutorial deleted successfully!!");
  }
  return (
    <div className="container">
      <Link to="/tutorial/add" className="col-md-2 btn btn-outline-dark my-5 ml-auto">
        Add Tutorial
      </Link>
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>

                <th scope="col">Title</th>
                <th scope="col">Description</th>

                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {contacts.data.length > 0 ? (
                contacts.data.map((contact: any, index: any) => (
                  <tr key={index}>

                    <td>{contact.title}</td>
                    <td>{contact.description}</td>
                    <td>
                      <Link
                        to={`/tutorial/edit/${contact.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger ml-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No tutorial found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state:any) => ({
//   contacts: state,
// });

// const mapDispatchToProps = (dispatch:any) => ({
//   deleteContact: (id:any) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//     toast.success("Contact deleted successfully!!");
//   },
// });

export default TutorialHome;