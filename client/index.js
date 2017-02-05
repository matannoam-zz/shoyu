import { h, render } from 'preact'

function App () {
  return (
    <div class='card red'>
        <h1>Shoyu</h1>
        <h2>go to shows</h2>
        <p><small>
          hand-made by <a href='https://github.com/matannoam' target='_blank'>Matan Noam Shavit</a>.
        </small></p>
    </div>
  )
}


if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools')
}

const root = document.getElementById('app')

function init(app) {
  render(app, root)
}

init(<App />)
