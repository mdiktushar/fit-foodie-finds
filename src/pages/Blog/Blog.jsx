import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <p className="font-weight-normal">
              Tell us the differences between uncontrolled and controlled
              components.
            </p>
            <div className="small">
              <p>
                In React, the terms "controlled component" and "uncontrolled
                component" refer to how a component manages and updates its
                internal state and props.
              </p>
              <p>
                An uncontrolled component is a component whose state is managed
                by the DOM instead of by React. In an uncontrolled component,
                the value of an input element is managed by the browser, and you
                can get the value of the input using a ref. Uncontrolled
                components are generally easier to use when you just need to
                capture simple form data, and you don't need to manage the value
                in your component's state.
              </p>

              <p>
                A controlled component, on the other hand, is a component whose
                state is managed by React. In a controlled component, you set
                the value of an input element using props and update the value
                using event handlers. Controlled components are generally used
                when you need to manage the value of an input element in your
                component's state, or when you need to perform some validation
                or logic based on the input value.
              </p>

              <p>
                In summary, the main difference between a controlled component
                and an uncontrolled component is how they manage their internal
                state. Uncontrolled components rely on the DOM to manage their
                state, while controlled components manage their state using
                React. Controlled components are generally more powerful and
                flexible but require more code to implement.
              </p>
            </div>
          </li>
          <li>
            <p className="font-weight-normal">
              How to validate React props using PropTypes
            </p>
            <div className="small">
              <p>
                React provides a built-in library called PropTypes to validate
                the props passed to a component. PropTypes allow you to define
                the expected type and shape of each prop, which helps catch bugs
                early on and make your code more robust.
              </p>
              <ul>
                <li>
                  <samp className="font-weight-bold">PropTypes.arrayO:</samp>
                  PropTypes.func
                </li>
                <li>
                  <samp className="font-weight-bold">PropTypes.shape:</samp>Used
                  to validate that an object has a certain shape, meaning it has
                  specific properties with specific types.
                </li>
                <li>
                  <samp className="font-weight-bold">
                    PropTypes.instanceOf:
                  </samp>
                  Used to validate that a prop is an instance of a specific
                  class.
                </li>
                <li>
                  <samp className="font-weight-bold">PropTypes.oneOf:</samp>Used
                  to validate that a prop matches one of a specific set of
                  values.
                </li>
                <li>
                  <samp className="font-weight-bold">PropTypes.oneOfType:</samp>
                  Used to validate that a prop matches one of a specific set of
                  types.
                </li>
                <li>
                  <samp className="font-weight-bold">PropTypes.objectOf:</samp>
                  Used to validate that an object's values are all of a specific
                  type.
                </li>
                <li>
                  <samp className="font-weight-bold">PropTypes.func:</samp>Used
                  to validate that a prop is a function.
                </li>
              </ul>
              <p>
                By using PropTypes to validate your component's props, you can
                help catch bugs and ensure that your component is used correctly
                by other developers. When PropTypes detects that an incorrect
                type or value is being passed in as a prop, it will generate a
                warning in the console.
              </p>
            </div>
          </li>
          <li>
            <p className="font-weight-normal">
              Tell us the difference between nodejs and express js.
            </p>
            <li className="small">
              <p>
                Node.js is an open-source, server-side JavaScript runtime that
                allows developers to build scalable and efficient network
                applications. It provides an event-driven, non-blocking I/O
                model, which makes it ideal for building real-time,
                high-performance web applications.
              </p>
              <p>
                Express.js, on the other hand, is a minimalist and flexible web
                application framework for Node.js. It provides a set of powerful
                features for building web applications, including routing,
                middleware, and templating. Express.js is built on top of
                Node.js and provides an easy-to-use, yet powerful, interface for
                building web applications.
              </p>
              <p>
                In summary, Node.js is a JavaScript runtime that allows you to
                execute JavaScript code outside of a web browser, while
                Express.js is a web application framework built on top of
                Node.js that provides additional features for building web
                applications, such as routing and middleware. In other words,
                Node.js provides the foundation on which Express.js is built,
                and Express.js provides a set of powerful tools and features for
                building web applications with Node.js.
              </p>
            </li>
          </li>
          <li>
            <p className="font-weight-normal">
              What is a custom hook, and why will you create a custom hook?
            </p>
            <div className="small">
              <p>
                In React, a custom hook is a reusable function that encapsulates
                a particular piece of logic and state that can be shared across
                multiple components. A custom hook allows you to abstract away
                complex logic and state management, making your components more
                readable and easier to maintain.
              </p>
              <p>You might want to create a custom hook in a few scenarios:</p>
              <ul>
                <li>
                  <samp className="font-weight-bold">Reusing logic:</samp> When
                  you have complex logic that is reused across multiple
                  components, you can extract that logic into a custom hook to
                  make it more reusable and easier to maintain.
                </li>
                <li>
                  <samp className="font-weight-bold">
                    Abstracting away state management:
                  </samp>
                  When you have stateful logic that is required in multiple
                  components, you can abstract the state management away into a
                  custom hook, making it easier to share the state between
                  components.
                </li>
                <li>
                  <samp className="font-weight-bold">
                    Improving code readability:{" "}
                  </samp>
                  When your component code is getting too complex, you can
                  extract some of the logic into a custom hook, making your
                  component code cleaner and more readable.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Blog;
