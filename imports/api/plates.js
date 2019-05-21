import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Plates = new Mongo.Collection('plates')

if (Meteor.isServer) {
    Meteor.publish('plates', () => Plates.find({}))
}


Meteor.methods({
    'plates.add'({ name, price, imageUrl, discount, preparationTime, options = [] }) {
        new SimpleSchema({
            name: {
                required: true,
                type: String,
                min: 1
            },
            price: {
                required: true,
                type: Number,
            },
            imageUrl: {
                required: true,
                type: String,
                min: 1,
                regEx: SimpleSchema.RegEx.Url
            },
            discount: {
                type: Number,
            },
            preparationTime: {
                required: true,
                type: String 
            },
            options: {
                type: Array
            },
            'options.$': {
                type: Object
            }
        }).validate({
            name,
            price: parseFloat(price),
            imageUrl,
            discount: parseFloat(discount),
            preparationTime,
            options
        })

        return Plates.insert({
            name,
            price,
            imageUrl,
            discount,
            preparationTime,
            options
        })
    },
    'plates.remove'() {

    },
    'plates.update'() {

    }
})