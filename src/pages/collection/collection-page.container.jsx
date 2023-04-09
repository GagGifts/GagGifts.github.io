import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import CollectionPage from './collection-page.component'
import withSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose (
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageContainer