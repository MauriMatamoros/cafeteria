import React from 'react'

export default class OptionsForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            imageUrl: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    onPriceChange = (e) => {
        const price = e.target.value
        if (!price || price.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }))
        }
    }

    onImageUrlChange = (e) => {
        const imageUrl = e.target.value
        this.setState(() => ({ imageUrl }))
    }

    render() {
        return (
            <div>
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
                        autoFocus
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                </label>
                <label>
                    ImageUrl
                    <input 
                        type="text"
                        placeholder="Image Url"
                        autoFocus
                        value={this.state.imageUrl}
                        onChange={this.onImageUrlChange}
                    />
                </label>
            </div>
        )
    }
}