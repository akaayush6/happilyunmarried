# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

api
Category list-https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob

Product listhttps://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id={{category_id }}


categories are displayed as tabs, which can be scrolled horizontally.
Each tab has a different background image. Whenever a category is clicked on, its products

Below the tabs, a list of products belonging to the selected category are
shown.

product information has
to be displayed in the UI:
● Product image
● Product name
● Product weight (gm/ml)
● Product MRP
● Product special price
● Product rating
● “ADD TO CART” button if product is in stock (click handler is not part of the scope)
● “OUT OF STOCK” button if product is not in stock (no action to be performed on click)

Initially, only 3 products should be shown. Clicking on this
button should reveal all the remaining products in the list. When expanded, this button should
change to “[-] View Less” & clicking on it should bring the product list back to its initial state

The row below the product list shows the
selected category name and a “change” button. Clicking on this button should open a
drop-down like dialog as shown below. Clicking on any of the categories should switch to the
respective category tab & dismiss the dialog.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



