import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PlateForm from './PlateForm'
import { history } from '../routes/routes'

export class AddPlate extends React.Component{
    onSubmit = (plate) => {
        this.props.call('plates.add', plate, (err) => console.log(err))
        history.push('/plateList')
    }

    render() {
        return (
            <div>
                <h1>Add Plate</h1>
                <PlateForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default withTracker(() => ({
    call: Meteor.call
}))(AddPlate)