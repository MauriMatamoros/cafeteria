import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Options = new Mongo.Collection('options')

Meteor.methods({
    'options.add'() {
        
    },
    'options.remove'() {

    },
    'options.update'() {

    }
})