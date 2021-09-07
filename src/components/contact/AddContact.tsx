import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import {getContactListState} from '../../store/contact/selector'

const AddPost = () => {
    //const { contacts, addContact } = props
    // let DatePicker = require("react-bootstrap-date-picker");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('male');
    const [city, setCity] = useState('');
    const [TnC, setTnC] = useState(false);
    const contacts = useSelector(getContactListState)
    console.log('::::::::::::::::::',contacts)
    const history = useHistory();
    const path = history.location.pathname
    const id_obj: any = useParams();
    console.log(id)
    const currentContact = contacts.contactReducer.find(
        (contact: any) => contact.id === parseInt(id_obj.id)
    );


    useEffect(() => {
        if (path !== '/contact/add') {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
            setDate(currentContact.date)
            setGender(currentContact.gender)
            setCity(currentContact.city)
            setId(id_obj.id)
        }

    }, [currentContact, id_obj.id, path]);

    const dispatch = useDispatch()
    const addContact = (data: any) => {
        dispatch({ type: "ADD_CONTACT", payload: data });
    }
    const updateContact = (data: any) => {
        dispatch({ type: "UPDATE_CONTACT", payload: data });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const checkContactEmailExists = contacts.contactReducer.filter((contact: any) =>
            contact.email === email && contact.id !== currentContact.id
                ? contact
                : null
        );
        const checkContactPhoneExists = contacts.contactReducer.filter((contact: any) =>
            contact.phone === phone && contact.id !== currentContact.id
                ? contact
                : null
        );

        if (!email || !name || !phone || !date || !TnC || !city || !gender) {
           
            return toast.warning("Please fill in all fields!!");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error("This phone number already exists!!");
        }



        if (path === '/contact/add') {
            const add_data = {
                id: contacts.contactReducer.length > 0 ? contacts.contactReducer[contacts.contactReducer.length - 1].id + 1 : 0,
                email,
                name,
                phone,
                date,
                city,
                gender,
                TnC

            };
            addContact(add_data);
            toast.success("Contact added successfully!!");
            history.push("/contact");
        } else {
            const update_data = {
                id: currentContact.id,
                email,
                name,
                phone,
                date,
                gender,
                city
            };
            updateContact(update_data);
            toast.success("Contact updated successfully!!");
            history.push("/contact");
        }


    };


    return (
        <div className="container-fluid">
            <h6 className="text-center text-dark py-1 display-2">{path === '/contact/add' ? 'Add Post' : 'Update Post'}</h6>
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
                                type="number"
                                placeholder="Phone"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="date"
                                placeholder="Dob"
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-control">
                                <span> Select Gender : </span>
                                <label>
                                    <input
                                        type="radio"

                                        value='male'
                                        checked={gender === 'male'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    Male
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        placeholder="select gender"
                                        value='female'
                                        checked={gender === 'female'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    female
                                </label>
                            </div>



                        </div>




                        <div className="form-group">
                            <div className="form-control">
                                <input
                                    className=""
                                    type="text"
                                    placeholder="Select City Name"
                                    required
                                    value={city}
                                   // onChange={(e) => setCity(e.target.value)}
                                />


                                <select
                                    className=""
                                    onChange={(e) => setCity(e.target.value)}>
                                    <option> delhi</option>
                                    <option> lucknow</option>
                                    <option> mumbai</option>
                                    <option> Goa</option>
                                    <option> Hyderabad</option>

                                </select>
                            </div>

                        </div>
                        <div className="form-group">
                            <div className="form-control"> 
                            <input
                                type="checkbox"

                                checked={TnC}
                                onChange={(e) => setTnC(e.target.checked)}
                            />
                            <span> Do you agree with above all data is right </span>
                            </div>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-between my-2">
                            <button type="submit" className="btn btn-primary">
                                {path === '/contact/add' ? 'Add Contact' : 'Update Contact'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => history.push("/contact")}
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