import React, { Component } from 'react'

export default class MatchesList extends Component {
    
    state = {
        matcheslist: []
    }

    static getDerivedStateFromProps(props, state) {
        return state = {
            matcheslist: props.matches
        }
    }
    
    render() {
        return (
        <div>
            
        </div>
        )
    }
}
