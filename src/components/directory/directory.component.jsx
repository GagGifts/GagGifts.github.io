import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'
import {  
    DirectoryContainer
} from './directory.styles'

const Directory = ({ sections }) => (
    <DirectoryContainer>
        {
            sections.map(({ id, ...otherSectionsProps}) => (
                <MenuItem 
                    key={id}
                    {...otherSectionsProps}
                />
            ))
        }
    </DirectoryContainer>
)
    
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);