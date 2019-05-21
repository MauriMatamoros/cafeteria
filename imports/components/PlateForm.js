import React from 'react'
import { Meteor } from 'meteor/meteor'
import { history } from '../routes/routes'

export default class PlateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            imageUrl: '',
            discount: '',
            preparationTime: '',
            error: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    onPriceChange = (e) => {
        const price = e.target.value
        if (!price || price.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    }

    onImageUrlChange = (e) => {
        const imageUrl = e.target.value
        this.setState(() => ({ imageUrl }))
    }

    onDiscountChange = (e) => {
        const discount = e.target.value
        if (!discount || discount.match(/^\d{0,2}(\.\d{0,2})?$/)) {
            this.setState(() => ({ discount }))
        }
    }

    onPreparationTimeChange = (e) => {
        const preparationTime = e.target.value
        if (!preparationTime || preparationTime.match(/^(\d{0,2})$/)) {
            this.setState(() => ({ preparationTime }))
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        Meteor.call('plates.add', { ...this.state }, (err) => console.log(err))
        history.push('/plateList')
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Name
                        <input 
                            type="text"
                            placeholder="Name"
                            autoFocus
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                    </label>
                    <label>
                        Price
                        <input 
                            type="text"
                            placeholder="Price"
                            value={this.state.price}
                            onChange={this.onPriceChange}
                        />
                    </label>
                    <label>
                        Image Url
                        <input 
                            type="text"
                            placeholder="Image Url"
                            value={this.state.imageUrl}
                            onChange={this.onImageUrlChange}
                        />
                    </label>
                    <label>
                        Discount
                        <input 
                            type="text"
                            placeholder="Discount"
                            value={this.state.discount}
                            onChange={this.onDiscountChange}
                        />
                    </label>
                    <label>
                        Preparation Time
                        <input 
                            type="text"
                            placeholder="Preparation Time"
                            value={this.state.preparationTime}
                            onChange={this.onPreparationTimeChange}
                        />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}