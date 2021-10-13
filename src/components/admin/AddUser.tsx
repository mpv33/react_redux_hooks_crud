import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { getUserListState } from "../../store/admin/selector";


const AddPost = () => {
    //const { contacts, addContact } = props
    // let DatePicker = require("react-bootstrap-date-picker");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [id, setId] = useState("");
    const contacts = useSelector(getUserListState)
    console.log('::::::::::::::::::',contacts)
    const history = useHistory();
    const path = history.location.pathname
    const id_obj: any = useParams();
    console.log(id)
    const currentContact = contacts.data.find(
        (contact: any) => contact.id == parseInt(id_obj.id)
    );


    useEffect(() => {
        if (path !== '/admin/add') {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setRole(currentContact.role);
          
            setId(id_obj.id)
        }

    }, [contacts]);

    const dispatch = useDispatch()
    const addContact = (data: any) => {
        dispatch({ type: "ADD_USER", payload: data });
    }
    const updateContact = (data: any) => {
        dispatch({ type: "UPDATE_USER", payload: data });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const checkContactEmailExists = contacts.data.filter((contact: any) =>
            contact.email === email && contact.id !== currentContact.id
                ? contact
                : null
        );
       

        if (!email || !name || !role) {
           
            return toast.warning("Please fill in all fields!!");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
        }
       



        if (path === '/admin/add') {
            const add_data = {
                id: contacts.data.length > 0 ? contacts.data[contacts.data.length - 1].id + 1 : 0,
                email,
                name,
                role,
             

            };
            addContact(add_data);
            toast.success(" admin added successfully!!");
            history.push("/admin");
        } else {
            const update_data = {
                id: currentContact.id,
                email,
                name,
                role,
               
            };
            updateContact(update_data);
            toast.success("admin updated successfully!!");
            history.push("/admin");
        }


    };


    return (
        <div className="container-fluid">
            <h6 className="text-center text-dark py-1 display-2">{path === '/admin/add' ? 'Add user' : 'Update user'}</h6>
            <div className="row">
                <div className="col-md-6 p-5 mx-auto shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Full name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="role"
                                required
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                      
                        <div className="form-group d-flex align-items-center justify-content-between my-2">
                            <button type="submit" className="btn btn-primary">
                                {path === '/admin/add' ? 'Add user' : 'Update user'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => history.push("/admin")}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// const mapStateToProps = (state:any) => ({
//   contacts: state,
// });
// const mapDispatchToProps = (dispatch:any) => ({
//   addContact: (data:any) => {
//     dispatch({type: "ADD_CONTACT", payload: data });
//   },
// });

export default AddPost;