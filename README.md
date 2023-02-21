Welcome to the ACT Webapp!

To start developing run 'yarn start' in the terminal. Happy development!

Sample of restJs api helper usage:

    import { find } from './utils';

    const Component = () => {
        const { data, loading, error } = find(URL);

        if (loading) {
            // Handle loading state here
        }

        if (error) {
            // Handle error state here
        }

        return (
            <h1
            style={{
                textAlign: 'center'
            }}
            >
                RestJs
            </h1>
        );
    };
