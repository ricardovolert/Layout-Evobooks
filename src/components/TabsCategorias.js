import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GridListCategoria from './GridListCategoria';

const styles = {
  headline: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TabsCategorias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Todos" value={0} />
          <Tab label="Biologia" value={1} />
          <Tab label="Veiculos" value={2} />
          <Tab label="Anatomia" value={3} />
          <Tab label="Animais" value={4} />
          <Tab label="Química" value={5} />
          <Tab label="Arquitetura" value={6} />
          <Tab label="Móveis" value={7} />
          <Tab label="Automóveis" value={8} />
          <Tab label="Tecnologia" value={9} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Todas Categorias</h2>
            <GridListCategoria/><br />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Biologia</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Veiculos</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Anatomia</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Animais</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Química</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Arquitetura</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Móveis</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Automóveis</h2>
            <GridListCategoria/>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Tecnologia</h2>
            <GridListCategoria/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default TabsCategorias;