import React from 'react';

export default ({message, name}) => <div>{message || "Hello" } {name} het is {new Date().toString()}</div>;
