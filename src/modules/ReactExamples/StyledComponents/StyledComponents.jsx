import React from 'react';
import styled from '@emotion/styled';
import colours from 'src/styles/imports/variables.scss';

const Button = styled.button`
    background: turquoise;
`;

const ErrorText = styled.p`
    color: ${colours.errorTextColor};
`;

export const StyledComponents = () => {
    return (
        <div className="section">
            <h2 className="section__heading">Styled Components</h2>
            <p>
                Docs:{' '}
                <a href="https://emotion.sh/docs/styled" target="_blank" rel="noreferrer">
                    https://emotion.sh/docs/styled
                </a>
            </p>

            <h3 className="section__subheading">Button</h3>
            <Button>This my button component.</Button>

            <h3 className="section__subheading">SCSS variables</h3>
            <ErrorText>This text color is based on SCSS variable.</ErrorText>
        </div>
    );
};
