import React from 'react';

const Blog = () => {
    return (
        <div className=' text-center mt-10 mb-10'>
            <h3 className=' font-bold text-4xl mb-4'>1. Tell us the differences between uncontrolled and controlled components.</h3>
            <p className=' pl-32 pr-32'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h3 className=' font-bold text-4xl mb-4'>2. How to validate React props using PropTypes?</h3>
            <p className=' pl-32 pr-32'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes.</p>
            <h3 className=' font-bold text-4xl mb-4'>3. Tell us the difference between nodejs and express js.</h3>
            <p className=' pl-32 pr-32'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
            <h3 className=' font-bold text-4xl mb-4'>4. What is a custom hook, and why will you create a custom hook?</h3>
            <p className=' pl-32 pr-32'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
        </div>
    );
};

export default Blog;