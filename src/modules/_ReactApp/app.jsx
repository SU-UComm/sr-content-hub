// Imports
import React, {useState, useEffect} from 'react';
import {AppStateProvider} from 'src/modules/_ReactApp/AppState/AppState.jsx';
import {DataStateProvider} from 'src/modules/_ReactApp/DataState/DataState.jsx';
import {Main} from 'src/modules/_ReactApp/Main/Main.jsx';

const dataStateDefaultData = require('modules/_ReactApp/DataState/dataStateDefaultData.json');
let appStateDefaultData = require('modules/_ReactApp/AppState/appStateDefaultData.json');
appStateDefaultData.testWindowVariable = window.testWindowVariable || false;

export const App = () => {
    const [data, setData] = useState(null);
    const [facets, setFacetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                // const req0Url = response['info']['url'];
                // const resp0Code = response['info']['http_code'];
                setData(result);
                setFacetData(result.response.facets);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <main role="main" id="content" className="su-centered-container su-pt-95 su-bg-gray-bg su-grid su-grid-cols-12 su-pb-120">
            <AppStateProvider>
                <DataStateProvider defaultData={dataStateDefaultData}>
                    {/* <div className="container"> */}
                    <Main />
                    {/* </div> */}
                </DataStateProvider>
            </AppStateProvider>
        </main>
    );
};
