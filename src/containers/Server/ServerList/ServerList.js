import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import Server from '../../../components/ServerComponents/Server/Server';



class ServerList extends Component {
    componentDidMount = () => {
        let url = '/api/Features/GetServers';
        this.props.onGetData(url, { ...this.props });
    }

    render() {
        let servers = [];
        if (this.props.data && this.props.data.length > 0) {
            servers = this.props.data.map((server) => {
                return (
                    <Server key={server.name} server={server} {...this.props} />
                )
            })
        }
        return (
            <Aux>
                <Row>
                    <Col mdOffset={10} md={2}>
                        <Link to='/createServer' >Create Server</Link>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Credentials required to update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servers}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServerList);