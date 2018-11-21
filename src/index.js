import header from './header'
import body from './body'

const getFooter = () => import('./footer')

console.log(header)
console.log(body)

getFooter().then(module => {
    console.log(module.default)
})
