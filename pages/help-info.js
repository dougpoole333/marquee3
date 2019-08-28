class WalkthroughInfo extends React.Component {

  render(){
      if(this.props.field == "faq"){
        return(
          <h1>THIS IS THE FAQ SECTION</h1>
        )
      }
      if(this.props.field == "contact-us"){
        return(
          <h1>THIS IS CONTACT US SECTION</h1>
        )
      }
      if(this.props.field == "other-products"){
        return(
          <h1>THIS IS THE OTHER PRODUCTS SECTION</h1>
        )
      }
  }
}

export default WalkthroughInfo
