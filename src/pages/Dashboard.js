import React, { Component } from 'react'
import Container from '../components/Container'
import { FlatButton, FloatingActionButton } from 'material-ui'

import data from '../requests/places';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import { Link } from 'react-router-dom'
import { ContentAdd } from 'material-ui/svg-icons';

export class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: data.places
        }
    }

    places() {
        return this.state.places.map((place, index) => {
            return <PlaceHorizontal place={place}></PlaceHorizontal>
        })
    }
    render() {
        return (
            <div>
                <Link to="/new">
                    <FloatingActionButton className="FAB" secondary={true}>
                        <ContentAdd></ContentAdd>
                    </FloatingActionButton>
                </Link>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-2" style={{ textAlign: "left" }}>
                            <FlatButton label="Explorar" />
                            <FlatButton label="Favoritos" />
                            <FlatButton label="Visitas previas" />
                        </div>
                        <div className="col-xs-12 col-md-10">
                            {this.places()}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Dashboard
