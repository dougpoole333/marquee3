class WalkthroughInfo extends React.Component {

  render(){
      if(this.props.field == "homepage"){
        return(
          <h1>THIS IS THE HOMEPAGE INFO SECTION</h1>
        )
      }
      if(this.props.field == "other-pages"){
        return(
          <h1>THIS IS THE OTHER PAGES SECTION</h1>
        )
      }
  }
}

export default WalkthroughInfo
