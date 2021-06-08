import React from 'react'

const styles = {
    backgroundColor: 'black',
    color: 'white'
}

function Button(props) {
    return (
        <button style={styles}>{props.title}</button>
    )
}

export default Button;
