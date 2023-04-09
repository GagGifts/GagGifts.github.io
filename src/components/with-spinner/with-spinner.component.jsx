import React from 'react'
import {  
    SpinnerOverlay,
    SpinnerContainer
} from './with-spinner.styles'

const withSpinner = WrappedComponent => ({ isLoading, ...props }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...props}/>
    )
}

export default withSpinner;