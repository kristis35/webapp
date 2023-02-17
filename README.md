Welcome to the ACT Webapp!

To start developing run 'yarn start' in the terminal. Happy development!

Sample of test restJs api helper class usage:

    import { useState, useEffect } from 'react';
    import { RestJs } from './utils';

    const Component = () => {
        const [testData, setTestData] = useState(null);

        useEffect(() => {
            RestJs.find('url', (response) => {
            setTestData(response);
            });
        }, []);

        return <div>Test RestJs</div>;
    };
