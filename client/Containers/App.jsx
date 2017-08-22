import React from 'react';
import Waypoint from 'react-waypoint';

const App = () => (
  <div>
    <div style={styles.header}>
      <h1>ScrollStory</h1>
    </div>
    <section style={styles.section}>
      <Waypoint
        onEnter={() => console.log('entering first Waypoint!')}
        onLeave={() => console.log('leaving first Waypoint!')}
      >
        <p>THIS IS THE FIRST WAYPOINT</p>
      </Waypoint>
    </section>
    <section style={styles.section}>
      <Waypoint
        onEnter={() => console.log('entering second Waypoint!')}
        onLeave={() => console.log('leaving second Waypoint!')}
      >
        <p>THIS IS THE SECOND WAYPOINT</p>
      </Waypoint>
    </section>
  </div>
);

export default App;


const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '3em',
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'red solid 3px',
    minHeight: '100vh',
    fontFamily: 'Arial',
    fontSize: '1.5em',
  },
};

