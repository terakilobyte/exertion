// We only need to import the modules necessary for initial render
import Projects from './Projects'
import CoreLayout from '../layouts/CoreLayout'
/*  Note: Instead of using JSX, we recommend using react-router
   PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: Projects,
    childRoutes: [
      require('./About').default,
      require('./Hire').default,
      require('./Counter').default(store),
      require('./TicTacToe').default(store),
      require('./NotFound').default
    ]
  })
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
   using getChildRoutes with the following signature:
   getChildRoutes (location, cb) {
   require.ensure([], (require) => {
   cb(null, [
   // Remove imports!
   require('./Counter').default(store)
   ])
   })
   }
   However, this is not necessary for code-splitting! It simply provides
   an API for async route definitions. Your code splitting should occur
   inside the route `getComponent` function, since it is only invoked
   when the route exists and matches.
 */

export default createRoutes
