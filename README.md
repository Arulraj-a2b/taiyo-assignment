Steps to be followed after cloning the repo:

## Installation

Add the neccesary use node version `18.16.0`

```bash
yarn
```

## Starting the Application

Kindly run start redis in your background. Then run the following commands

```bash
yarn start
```

the server now runs on `http://localhost:3000`

## Using Tailwind Styles

Tailwind [CSS](https://tailwindcss.com/docs/guides/create-react-app) works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

To use this feature follow the below steps.

```javascript
<h1 classNames="text-3xl font-bold underline">Hello world!</h1>
```

## Adding Svg Icons

Install svgr cli in your system [SVGR CLI](https://react-svgr.com/docs/cli/). Then run the following commands npx @svgr/cli `ICON NAME`. For example if you have a file named `trackIcon.svg` in your current folder then run

```sh
npx @svgr/cli SvgHelp.svg
```

in your terminal. Then copy paste the generated react file

```javascript
const SvgHelp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    </svg>
  );
};

export default SvgHelp;
```

in the `src/icons` folder, so that you can later import it in your application.
