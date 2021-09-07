import React from "react";
import { connect ,useDispatch,useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {getContactListState} from '../../store/contact/selector'
const ContactHome = () => {
   // const { contacts, deleteContact } = props
 // const contacts =useSelector((state:any) => state)

  const contacts =useSelector(getContactListState)
   const dispatch = useDispatch()
    const  deleteContact =(id:any) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Contact deleted successfully!!");
      }
  return (
    <div className="container">
        <Link to="/contact/add" className="col-md-2 btn btn-outline-dark my-5 ml-auto">
          Add Contact
        </Link>
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Dob</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope="col">Action</th>
               
              </tr>
            </thead>
            <tbody>
              {contacts.contactReducer.length > 0 ? (
                contacts.contactReducer.map((contact:any, id:any) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.date}</td>
                    <td>{contact.gender}</td>
                    <td>{contact.city}</td>
                    <td>
                      <Link
                        to={`/contact/edit/${contact.id}`}
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
                  <th>No contacts found</th>
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

export default ContactHome;