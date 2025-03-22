## What is Virtual DOM?
- When we use the createRoot method to rendor our application, React actually creates a virtual DOM. This has been improved by Fibre which is an improved version of the reconciliation algorithm.

- React creates a virtual DOM representation of the UI, when a state changes, React creates a new virtual DOM. React then compares this new virtual DOM to the old virtual DOM and calculates the minimum number of updates needed and applies them to a real DOM.

- When there are many state updates to UI, instead of going through each and everthing update, Fibre allows us to skip a few updates and go to the latest update. Or we can give priority to certain state updates. 