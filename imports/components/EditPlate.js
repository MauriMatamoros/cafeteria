import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PlateForm from './PlateForm'
import { Plates } from '../api/plates';
import { history } from '../routes/routes'

export class EditPlate extends React.Component{
    onSubmit = (plate) => {
        this.props.call('plates.update', plate, (err) => console.log(err))
        history.push('/plateList')
    }

    onRemove = () => {
        const _id = this.props.match.params.id
        this.props.call('plates.remove', _id)
        history.push('/plateList')
    }

    render() {
        return (
            <div>
                <h1>Edit Plate</h1>
                {this.props.plate ? <PlateForm onSubmit={this.onSubmit} plate={this.props.plate} /> : 'spinner'}
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

export default withTracker((props) => {
    const _id = props.match.params.id
    Meteor.subscribe('plate', _id)
    return {
        call: Meteor.call,
        plate: Plates.find({ _id }).fetch()[0]
    }
})(EditPlate)