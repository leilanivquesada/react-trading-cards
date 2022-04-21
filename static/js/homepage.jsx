'use strict';

function Homepage() {
  return <div>
    <p>Welcome to my page! Are you sure you didn't come here on accident?</p>
    <p>Hey, do you want to see my <a href="/cards">playing cards</a>? </p>
    <img src="/static/img/balloonicorn.jpg" />
    
</div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
