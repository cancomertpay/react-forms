# React Form Handling Examples

This repository contains a set of examples illustrating various approaches to working with forms in React.

## Examples

### 1. Login Forms

The first two examples showcase simple login forms. These forms have been created individually using the useState and useRef hooks.

- [Login Form 1 State Based Form](/src/components/StateLogin.jsx)
- This form logic is preferred for key stroke validation-based.

- [Login Form 2 Ref Based Form](/src/components/RefLogin.jsx)
- This form logic is preferred for validating on submission.

### 2. Signup Form

The third example represents a more intricate signup form. This form employs the FormData browser method for a more straightforward and dynamic approach when dealing with complex forms.

- [Signup Form](/src/components/Signup.jsx)
- The preferred approach for form validation involves a combination of default HTML methods and custom methods.

## How to Use

Each example has its own directory. To inspect the source code of an example and run the project locally, follow these steps:

1. Navigate to the example directory: `cd example-directory-name`
2. Install the required dependencies using `npm install` or `yarn install`.
3. Start the project with `npm run dev` or `yarn dev`.

## License

This project is licensed under the [MIT License](LICENSE).