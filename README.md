# Movie App 2020

usernameSplash's React Tutorial

## Tasks

### 02.17

#### Setup

- Initialize Directory of React Project
- Make "Hello World" in React App

#### Creating my first React Component

- Learn about react component : jsx
  - component is the js fucntion returning HTML.
  - jsx is HTML in the javascript.
  - one React app can render only one component at the time.
  - I can send information to my component.
  - components are able to recycle dinamically.

#### Dynamic Component Generation

- use map method for making components dynamically


### 02.18
#### Rest
- I moved my development environment to macOS, with new Macbook.

### 02.19
#### Protection
- type checking by 'PropTypes'
#### Class Components and State
- React executes the render method in all my class components, automatically.
  - Class componetns have state(data)
  - setState method calls render method everytime. : React renders again.
- Component Life Cycle
  - the way React creates new components, kills some components.
  - constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount……
  - methods of React Component called after render()
    - mounting : be borned
    - updating : be modified, every time render method is called
    - unmounting : be killed
#### Fetching Data from API
- fetch
  - axios
- asynchronous method
  - async
  - await
- fetch -> store movie data in App Class Component -> render by Movie Function Component
#### Styling
- Movie.css