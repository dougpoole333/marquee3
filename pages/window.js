import { Card, Tabs } from '@shopify/polaris';
import WalkthroughInfo from "./walkthrough-info.js"

class Window extends React.Component {
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
        id: 'homepage',
        content: 'Homepage'
      },
      {
        id: 'other-pages',
        content: 'Other Pages'
      }
    ];

    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
          <Card.Section title={tabs[selected].header}>
            <WalkthroughInfo field={tabs[selected].id} />
          </Card.Section>
        </Tabs>
      </Card>
    );
  }
}

export default Window
