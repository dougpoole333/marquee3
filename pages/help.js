import { Card, Tabs } from '@shopify/polaris';
import HelpInfo from './help-info.js'

class Help extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0
    };
  }

  handleTabChange = (selectedTabIndex) => {
    this.setState({selected: selectedTabIndex});
  };

  render() {
    const selected = this.state.selected;
    const tabs = [
      {
        id: 'faq',
        content: 'FAQ'
      },
      {
        id: 'contact-us',
        content: 'Contact Us'
      },
      {
        id: 'other-products',
        content: 'Other Products'
      }
    ];

    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
          <Card.Section title={tabs[selected].header}>
            <HelpInfo field={tabs[selected].id} />
          </Card.Section>
        </Tabs>
      </Card>
    );
  }
}

export default Help
