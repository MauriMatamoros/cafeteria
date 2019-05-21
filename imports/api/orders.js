import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Orders = new Mongo.Collection('orders')

if (Meteor.isServer) {
    Meteor.publish('orders', () => {
        return Patients.find({})
    })
}

Meteor.methods({
    'orders.add'() {
        
    },
    'orders.remove'() {

    },
    'orders.update'() {

    }
})