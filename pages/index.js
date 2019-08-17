import { EmptyState, Layout, Page } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputThemeId: "",
      themes: []
    };
  }
  componentDidMount(){
    this.fetchThemes();
  }
  render() {
    return (
      <Page>
        <Layout>
          <EmptyState
            heading="Add the Marquee section to your theme"
            action={{
              content: 'Add',
              onAction: () => this.sendRequest()
            }}
            image={img}
          >
            <ul>
              {this.state.themes ? this.state.themes.map( el => <li>{el.name}: <strong>{el.id}</strong></li>) : null}
            </ul>
            <p>Enter the ID of the Theme where you want to add Marquee</p>
            <input
              type="text"
              name="themeId"
              value={this.state.themeId}
              onChange={this.handleChange} />

          </EmptyState>
        </Layout>
      </Page>
    );
  };


  fetchThemes = async () => {
    fetch("/themes", { method: "GET"})
    .then(response => response.json())
    .then(json => this.setState({themes: json.data.themes}))
    .then(() => console.log(this.state.themes))
  };
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  };

  logInput = () => {
    console.log(this.state.themeId)
  }

  sendRequest = async () => {
    var fetchUrl = "/api/" + this.state.themeId; 
    var method = "PUT";
    fetch(fetchUrl, { method: method })
    .then(response => response.json())
    .then(json => console.log(json))
  }
}

export default Index;
