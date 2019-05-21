import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

import { Plates } from '../api/plates'
import PlateItem from './PlateItem'

const PlateList = ({ plates }) => (
    <div>
        {plates.map((plate) => <PlateItem key={plate._id} {...plate} />)}
    </div>
)

export default withTracker(() => {
    Meteor.subscribe('plates')
    return {
        plates: Plates.find({}).fetch()
    }
})(PlateList)