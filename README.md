# REDUX:
npx create-react-app “name of project”
yarn add redux react-redux

Redux in the app complexity curve
Browser-based        / DOM manipulation / scale DOM manipulation  /   more complex data flow
js                              /  j-query                    / react-js                             / react-redux

## Why redux?

What is redux: Data- flow control  Dan Abramov and Andrew Clark 2015 influenced by ELM & React-flux
Data flows from the component via an action (or payload) the action is dispatched to the store which has a reducer
Functions from the reducer run and are sent back to the component.

This unidirectional flow allows any component to pass data to any other component. it solves the problem in React where data can only flow from the parent to the child, therefore can not flow from the child to parent, grandparent or sibling components.

Redux is useful to scale an app when there is a need to change state in multiple places.

Data is normalized in one location so you can have copies of data (state) all in sync so that all data-copies are known to each other, this eliminates ‘lurking’ copies of state (data).

## Steps

Create the basic framework of a component in React
import react redux

1. Create a store (object) Store handle all state changes in one place for system security/ stability as well as handling complex data flows
    * let store = createStore(reducer) - the variable is a let not a const as this is going to be updated
    * Holds the values in state which can be accessed by the getState() method
    * It is read only and changes come via reducer param
    * Reducer function in the store reducer (state, action) changes state via pure functions and payloads
    * These changes sent to the root reducer which dispatches the changes store.dispatch()
    *  Changes received by the components that subscribe to the changes subscribe(listener) or unsubscribe(listener)


2. Create the Reducer method - updates state changes with data flowing from app
    * Reducer (state, action) is a pure function which sends data (payloads) from the app components to the store via actions , this is done via the store.dispatch() function
    * Actions - are only payloads of data / they must be defined as a string constant/ must have a type of action property (prop)/ an have more props added to it - actions are 2 types creators and dispatchers
    * Reducer changes state via pure functions
        *  The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch)
        *  If no change is needed the previous state is returned to the component and no updates are made
        *  Root reducer makes copies of state and changes and then can make multiple reducers, this is called the state tree that can be traced back to the root reducer
        *  Pure functions means no api-calls, routing transitions returned in the reducers
        *  Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed

3. Set up Subscribe - The components that need to be aware of state subscribe to the store
    * components are set up with listeners to subscribe to these payload changes via the subscribe(listener) method
    * you can also unsubscribe by switching the listener off

4. Dispatch  changes to the components that have subscribed to the changes
    * store.dispatch(action) function, once the change has been dispatched it is updated in real-time
5. View
    * Displays data provided by store via the smart (stateful) pass down functions via props(are functions) to  dumb (stateless) components
    * The stateless component provide information to the smart (stateful) components if any action is required (via the functions or props they receive and send back) as call back functions in the smart (stateful) component
