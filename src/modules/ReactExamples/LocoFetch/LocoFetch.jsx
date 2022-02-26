import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const LocoFetch = (props) => {
    const [fetchResponse, setFetchResponse] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const apiURL = props.apiURL;

    const fetchJSON = (apiURL) => {
        setIsFetching(true);
        fetch(apiURL)
            .then((response) => {
                return response.json();
            })
            .then((joke) => {
                setIsFetching(false);
                setFetchResponse(joke);
            })
            .catch((err) => {
                setIsFetching(false);
                setFetchResponse(err);
            });
    };

    return (
        <div className="section">
            <h2 className="section__heading">Loco fetch example</h2>
            <button
                onClick={() => {
                    fetchJSON(apiURL);
                }}
            >
                Fetch Joke of the day!
            </button>
            <p>
                {isFetching ? 'Fetching ...' : ''}
                {fetchResponse?.success ? fetchResponse.contents.jokes[0].joke.text : JSON.stringify(fetchResponse)}
            </p>
            <p>
                Requires running <i>npm run loco</i>
            </p>
        </div>
    );
};

LocoFetch.propTypes = {
    apiURL: PropTypes.string,
};
