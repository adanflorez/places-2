import React, { Component } from 'react'
import Card, { CardHeader, CardText, CardActions } from 'material-ui/Card'
import { FlatButton } from 'material-ui'

export class PlaceHorizontal extends Component {
    render() {
        return (
            <Card style={{marginTop: "1em", overflow: "hidden"}}>
                <div className="row">
                    <div className="placeH-avatar">
                        <img src={this.props.place.imageUrl}/>
                    </div>
                    <div className="col-xs" style={{textAlign: "left"}}>
                        <CardHeader 
                        title={this.props.place.title}
                        subtitle={this.props.place.address}
                        />
                        <div className="row middle-xs">
                            <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9">
                                <CardText>{this.props.place.description}</CardText>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                                <CardActions>
                                    <FlatButton label="Ver más"></FlatButton>
                                </CardActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default PlaceHorizontal
