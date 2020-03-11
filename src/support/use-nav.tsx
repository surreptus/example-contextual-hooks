import React, {
  createContext,
  FC,
  useContext,
  useReducer
} from 'react'

/**
 * State Management
 *
 * NOTE: I'm using the useReducer function from react in conjunction with
 * context but you can accomplish something similar with just `setState` in
 * the manager instead. I chose to do this so its easier to test the parts
 * individually. This is all very much the same to redux.
 */

const DISPLAY = 'nav/DISPLAY'

const display = (isVisible: boolean) => ({
  type: DISPLAY,
  payload: isVisible
})

interface Action {
  type: string;
  payload: boolean;
}

const reducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case DISPLAY:
      return action.payload

    default:
      return state
  }
}

/**
 * Context and Manager
 *
 * NOTE: The following can be broken up into these parts:
 * - The context contains the store which returns a value and dispatcher
 * - The provider makes the context available to all it's children
 *
 * We need to define the context value so that we can use an array as the
 * return value, otherwise the compiler will infer that all types in the array
 * are interchangeable.
 */

type ContextValue = [
  boolean,
  (action: Action) => void
]

export const NavContext = createContext<ContextValue>([
  false,
  (action: Action) => {}
])

export const NavManager: FC = ({ children }) => (
  <NavContext.Provider value={useReducer(reducer, false)}>
    {children}
  </NavContext.Provider>
)

/**
 * Hook
 *
 * NOTE: This function returns two things, the current value and a setter
 * function. It's very much similar to the `useState` function provided by
 * react. This example is a bit contrived, but you can do similar things for
 * online statuses of users, socket connection, etc.
 */

type SetVisible = (isVisible: boolean) => void

type UseNav = [
  boolean,
  SetVisible
]

export const useNav = (): UseNav => {
  const [visible, dispatch] = useContext(NavContext)

  /**
   * sets the navigation context's current value to the one passed
   */

  const setVisible: SetVisible = (isVisible) => dispatch(display(isVisible))

  return [visible, setVisible]
}
