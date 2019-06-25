import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Button } from 'react-bootstrap';

const redirectToOwnerDetails = (id, history) => {
    history.push('/serverDetails/' + id);
}

const redirectToUpdateOwner = (id, history) => {
    history.push('/updateServer/' + id);
}

const rediterctToDeleteOwner = (id, history) => {
    history.push('/deleteServer/' + id);
}


const server = (props) => {
    return (
        <Aux>
            <tr>
                <td>{props.server.name}</td>
                <td>{props.server.credsRequiredToUpdate}</td>
            </tr>
        </Aux>
    )
}

export default server;