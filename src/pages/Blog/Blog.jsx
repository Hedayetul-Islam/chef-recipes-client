import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h3>2. How to validate React props using PropTypes?</h3>
            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes.</p>
<h3>3. Tell us the difference between nodejs and express js.</h3>
        </div>
    );
};

export default Blog;