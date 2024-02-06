import React from 'react';

export const NoContent = () => {
    return (
        <div className="su-mt-100 su-min-h-[35vh] su-mb-50 md:su-mt-100 md:su-mb-120 su-text-center">
            <h2 className="su-mb-12">No results found</h2>
            <p>Please search again using different keywords and filters.</p>
        </div>
    );
};
