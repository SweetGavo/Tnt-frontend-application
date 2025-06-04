# TNT Frontend Application

This is a [Next.js](https://nextjs.org/) project with custom configuration for SCSS modules and optimized asset handling.

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

The server will start on [http://localhost:8080](http://localhost:8080).

## Project Structure

```
.
├── components/     # Reusable React components
├── pages/         # Next.js pages
├── public/        # Static assets
├── styles/        # SCSS modules and global styles
└── utils/         # Utility functions
```

## CSS Modules Configuration

This project uses SCSS modules with the following features:

- Automatic camelCase class name exports for use in JavaScript/TypeScript
- Global SCSS variables and mixins available in all SCSS files
- Maintains original hyphenated class names in the CSS output

### Usage Example:

```scss
// styles/component.scss
.my-component {
  &-header {
    color: blue;
  }
}
```

```jsx
// components/Component.jsx
import styles from '../styles/component.scss';

export default function Component() {
  return (
    <div className={styles.myComponent}>
      <header className={styles.myComponentHeader}>
        Hello World
      </header>
    </div>
  );
}
```

## Available Scripts

- `yarn dev` - Starts the development server on port 8080
- `yarn build` - Creates an optimized production build
- `yarn start` - Runs the production server
- `yarn lint` - Runs ESLint to check code quality

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [SCSS Modules](https://github.com/css-modules/css-modules)
- [React Documentation](https://reactjs.org/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
