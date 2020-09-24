import React from 'react';

export default () => {
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

  return (
    <h1>Hello {getFullName({ firstName: 'thiago', lastName: 'alves' })}</h1>
  );
};
