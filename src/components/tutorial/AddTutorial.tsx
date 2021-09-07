import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { getTutorialState } from '../../store/tutorial/selector'
import { get, update, create } from "../../services/TutorialService";

const AddTutorial = () => {
    //const { contacts, addContact } = props
    // let DatePicker = require("react-bootstrap-date-picker");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");

    const contacts = useSelector(getTutorialState)
    const history = useHistory();
    const path = history.location.pathname
    const id_obj: any = useParams();

    const dispatch = useDispatch()

    const setData = ()=>{
        console.log(':::::::::::::::::new',contacts)
        setId(id_obj.id)
        setTitle(contacts.data.title)
        setDescription(contacts.data.description)
        console.log(':::::::::::::::::new',title,description)
    }
    


    useEffect(() => {
        if (path !== '/tutorial/add') {
            dispatch( get(id_obj.id))
        }

    }, [dispatch]);

    useEffect(() => {
        if (path !== '/tutorial/add') {
            setData()
          
        }

    }, [contacts]);
    

    const addContact = (data: any) => {
        dispatch(create(data));
        toast.success("Tutorial added successfully!!");
        history.push("/tutorial");
    }
    const updateContact = (data: any) => {
    
        dispatch(update(id, data));
        toast.success("Tutorial updated successfully!!");
        history.push("/tutorial");
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();


        if (!title || !description) {

            return toast.warning("Please fill in all fields!!");
        }


        if (path === '/tutorial/add') {
            const add_data = {
                id: null,
                title,
                description,
            };
            addContact(add_data);

        } else {
            const update_data = {
                title,
                description,
            };
            updateContact(update_data);

        }


    };


    return (
        <div className="container-fluid">
            <h6 className="text-center text-dark py-1 display-2">{path === '/tutorial/add' ? 'Add Tutorial' : 'Update Tutorial'}</h6>
            <div className="row">
                <div className="col-md-6 p-5 mx-auto shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Title"
                                value={title}
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Description"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-between my-2">
                            <button type="submit" className="btn btn-primary">
                                {path === '/tutorial/add' ? 'Add Tutorial' : 'Update Tutorial'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => history.push("/tutorial")}
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

export default AddTutorial;


