import React from 'react';


const style = {
    "borderSpacing": "5px"
}

const contactList = (props) => {
    const { contacts, deleteContact } = props;
    return <table style={style}>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete Contact</th>

            </tr>
            {contacts.map((contact, i) => {
                return <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td onClick ={()=>deleteContact(contact.id)} >Delete</td>
                </tr>
            })}
        </tbody>
    </table>
};


export default contactList