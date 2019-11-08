import React from 'react'
import { AppBar } from 'material-ui'
import { indigo600 } from 'material-ui/styles/colors'

export default class MyAppBar extends React.Component {
    render(){
        return(
            <AppBar 
            title="places"
            style={{"backgroundColor": indigo600}}
            showMenuIconButton={false}
             />
        )
    }
}