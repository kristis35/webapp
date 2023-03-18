Welcome to the ACT Webapp!

To start developing run 'yarn install' and then 'yarn start' in the terminal. Happy development!

Sample of restJs api helper usage:

    import { useFind } from './utils';

    const Component = () => {
        const { response, loading, error, find } = useFind(URL);

        find();

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
