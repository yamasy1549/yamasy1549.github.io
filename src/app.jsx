import React    from 'react'
import ReactDOM from 'react-dom'

var HelloReact = React.createClass({
  render: function() {
    return(
      <div>
        Hello React!!
      </div>
    )
  }
})

ReactDOM.render(
  <HelloReact />,
  document.querySelector(".content")
)
