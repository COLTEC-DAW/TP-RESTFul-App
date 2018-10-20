import React from 'react'


class NotFound extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {


  }

  render () {

    return (
      <div>
        <p>
          Uh, perhaps ur looking for one of those
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=2ahUKEwjVnYDAhJbeAhVvx1kKHXxpCkIQFjAGegQICRAB&url=https%3A%2F%2Fwww.telegraph.co.uk%2Fart%2Fwhat-to-see%2Fthe-most-wanted-missing-paintings%2F&usg=AOvVaw3geq7qfkmphk-X5EFELejA"> lost paintings</a>
        </p>
      </div>
    )
  }
}

export default NotFound
