import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    search: ''
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    const libraries = this.props.libraries;
    let libData = [];
    const searchKey = this.state.search.trim().toLocaleLowerCase();

    if (searchKey && searchKey.length > 0) {
      libData = libraries.filter(i => {
        return i.name.toLocaleLowerCase().match(searchKey);
      });
    }
    return (<div className="App ">
      <header className="App-header">


        <input type="text" value={this.state.search} onChange={(e) => this.handleChange(e)} />

        <ul>
          {
            libData.map((item, index) => {
              return <li key={index} > <a href={item.url}>{item.name}</a> </li>
            })
          }
        </ul>
      </header>
    </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

export default App;
