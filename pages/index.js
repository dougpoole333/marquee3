import { EmptyState, Spinner, Layout, Page, Select, Button } from '@shopify/polaris';
import Cookies from 'js-cookie';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selecting: true,
      loading: true,
      selected: '',
      themes: [],
      redirect: false
    };
  }

  componentDidMount(){
    this.getThemes();
  }

  render() {
    return (
      <Page>
        <Layout>
          {this.renderSelector()}
          {this.renderRedirect()}
          {this.renderSpinner()}
        </Layout>
      </Page>
    );
  };


  getThemes = async () => {
    fetch("/themes", { method: "GET"})
    .then(response => response.json())
    .then(json => this.setState({themes: json.data.themes, loading: false}))
  };

  handleChange = (newValue) => {
    this.setState({selected: newValue});
  };

  renderRedirect = () => {
    if (this.state.redirect && !this.state.loading) {
      return (
        <EmptyState>
          <a
            target="_blank"
            style={{textDecoration: 'none'}}
            href={'http://' + Cookies.get('shopOrigin') + `/admin/themes/${this.state.selected}/editor`}>
              <Button primary>OPEN CUSTOMIZER</Button>
          </a>

          <Button primary onClick={this.triggerReset}>ADD MARQUEE TO ANOTHER THEME</Button>
        </EmptyState>
      )
    }
  }

  renderSpinner = () => {
    if(this.state.loading){
      return (
        <EmptyState>
          <Spinner/>
        </EmptyState>
      )
    }
  }

  triggerReset = () => {
    this.setState({
      selecting: true,
      selected: '',
      redirect: false
    })
  }

  renderSelector = () => {
    if (this.state.selecting && !this.state.loading){
      return(
        <EmptyState>
          <Select
            options = {this.state.themes ? this.state.themes.map(el => {return{label: `${el.name}`, value:`${el.id}`}}) : null}
            onChange={this.handleChange}
            value={this.state.selected}
            placeholder = "select a theme"
            />
          <Button primary onClick={this.assetUpdateRequest}>Add</Button>
        </EmptyState>
      )
    }
  }

  assetUpdateRequest = async () => {
    this.state.selected ? this.setState({loading: true}) : null
    var fetchUrl = "/api/" + this.state.selected;
    var method = "PUT";
    fetch(fetchUrl, { method: method })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success'){
        this.setState({redirect: true, selecting: false, loading: false})
      }
    })
  }
}

export default Index;
