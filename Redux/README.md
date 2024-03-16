# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

start making of store file
one application usually one store file some execption
single source of truth
next all reducers introduce

featureko slice bolte hai
givng method of createslice for making slice

create slice taking three value - name, initialstate, reducers

reducers ke ander do cheezo ka acces milta hai state or action
state me updated value in store or action action payload

redux mai 4 factor hote hai

reducer context api ki tarah hai bus large scale par yeh use hota hai

store = store karne ke kaam aata hai store ke mini store ho sakte hai

reducer = ye elk tarah se object hai reducer funcalties ko define karte hai

useSelector =

useDispatch =
