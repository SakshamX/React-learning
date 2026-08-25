// const { Children } = require("react")

// const { Children } = require("react")

// function customReact (reactElement, container) {
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.Children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
// }

function customReact (reactElement, container) {
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
       if (prop === 'Children') continue;
       domElement.setAttribute(prop, reactElement.props
        [prop])
    }
    container.appendChild(domElement) 
}

 const reactElement = {
    type: 'a',
    props:{       
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
 }
 
 const mainContainer = document.querySelector('#root')


customReact(reactElement, mainContainer);