import React from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
 
const MY_API_KEY = "AIzaSyDJXZPLm5toTVcdqA6_t7nQkxtgUIP77sY" 
 
export default class GoogleSuggest extends React.Component {
    state = {
        search: "",
        value: "",
        name: this.props.field.name,
        address: this.props.value || ""
    }
 
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        // console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({search: "", value: geocodedPrediction.formatted_address})
        //this.props.value(geocodedPrediction.formatted_address)
        const { name } = this.state
        this.setState(() => {
            this.props.form.setFieldValue(name, geocodedPrediction.formatted_address);

            this.props.form.setFieldValue(name === 'origin'? 'originLat': 'destinationLat', geocodedPrediction.geometry.location.lat());
            this.props.form.setFieldValue(name === 'origin'? 'originLong': 'destinationLong', geocodedPrediction.geometry.location.lng());
        })
    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }
 
    handleStatusUpdate = (status) => {
        //console.log(status)
    }
 
    render() {
        const {search, value} = this.state
        return (
            <GoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <GooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "No results"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                className='field'
                                value={value}
                                placeholder={this.props.t('request.locationSearch')}
                                onChange={this.handleInputChange}
                            />
                        </GooglePlacesSuggest>
                    )
                }
            />
        )
    }
}