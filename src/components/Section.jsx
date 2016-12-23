import React from 'react'

export default class Section extends React.Component {
  constructor(props) { super(props) }

  render() {
    if(this.props.id == 'heading') {
     return (
       <section id={this.props.id}>
         <div className={this.props.id + '-wrapper'}>
           {this.props.children}
         </div>
       </section>
     )
    } else {
     return (
       <section id={this.props.id}>
         <div className={this.props.id + '-wrapper'}>
           <h2 className='hidden'>{this.props.id}</h2>
           {this.props.children}
         </div>
       </section>
     )
    }
  }
}
