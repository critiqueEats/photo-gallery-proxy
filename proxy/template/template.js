module.exports = restaurantId => (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/tyler-style.css">
        <title>Lorem Yelpsum</title>
      </head>
      <body>
        <div class="top">
          <div id="header"></div>
          <div id="gallery"></div>
        </div>
        <div class="bottom">
            <div id="sidebar"></div>
            <div id="reviews"></div>
        </div>
        <script src="/lib/react.development.js"></script>
        <script src="/lib/react-dom.development.js"></script>
        <script src="http://127.0.0.1:3001/bundle.js"></script>
        <script src="http://127.0.0.1:5002/bundle.js"></script>
        <script src="http://127.0.0.1:3003/bundle.js"></script>
        <script src="http://127.0.0.1:3005/bundle.js"></script>
        <script>
          ReactDOM.render(
            React.createElement(Header, {restaurantId: ${restaurantId}}, null),
            document.getElementById('header')
          );
          ReactDOM.render(
            React.createElement(Gallery, {restaurantId: ${restaurantId}}, null),
            document.getElementById('gallery')
          );
          ReactDOM.render(
            React.createElement(Sidebar, {restaurantId: ${restaurantId}}, null),
            document.getElementById('sidebar')
          );
          ReactDOM.render(
            React.createElement(Reviews, {restaurantId: ${restaurantId}}, null),
            document.getElementById('reviews')
          );
        </script>
      </body>
    </html>`
)