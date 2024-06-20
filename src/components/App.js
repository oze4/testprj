import React from 'react';
import styles from './Test.module.css'; // DOESN'T WORK
// import * as styles from './Test.module.css'; // WORKS

function App() {
    return (
        <>
            <p className={styles.a}>
                The text should be green!
            </p>
        </>
    );
}

export default App;