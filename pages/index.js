import { EmptyState, Layout, Page, Select } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      themes: []
    };
  }

  componentDidMount(){
    this.getThemes();
  }

  render() {
    return (
      <Page>
        <Layout>
          <EmptyState
            heading="Add the Marquee section to your theme"
            action={{
              content: 'Add',
              onAction: () => this.assetUpdateRequest()
            }}
          >
            <Select
              options = {this.state.themes ? this.state.themes.map(el => {return{label: `${el.name}`, value:`${el.id}`}}) : null}
              onChange={this.handleChange}
              value={this.state.selected}
              placeholder = "select a theme"
               />
          </EmptyState>
        </Layout>
      </Page>
    );
  };


  getThemes = async () => {
    fetch("/themes", { method: "GET"})
    .then(response => response.json())
    .then(json => this.setState({themes: json.data.themes}))
  };

  handleChange = (newValue) => {
    this.setState({selected: newValue});
  };

  assetUpdateRequest = async () => {
    var fetchUrl = "/api/" + this.state.selected; 
    var method = "PUT";
    fetch(fetchUrl, { method: method })
    .then(response => response.json())
    .then(json => console.log(json))
  }
}

export default Index;
