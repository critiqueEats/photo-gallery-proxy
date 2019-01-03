module.exports = restaurantId => (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/style.css">
        <title>Lorem Yelpsum</title>
      </head>
      <body>
        <div id="header"></div>
        <div id="gallery"></div>
        <div id="reservations"></div>
        <div id="reviews"></div>
        <script src="/lib/react.development.js"></script>
        <script src="/lib/react-dom.development.js"></script>
        <script src="http://localhost:3001/bundle.js"></script>
        <script src="http://localhost:5002/bundle.js"></script>
        <script src="http://localhost:3003/bundle.js"></script>
        <script src="http://localhost:3005/bundle.js"></script>
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
            React.createElement(Reservations, {restaurantId: ${restaurantId}}, null),
            document.getElementById('reservations')
          );
          ReactDOM.render(
            React.createElement(Reviews, {restaurantId: ${restaurantId}}, null),
            document.getElementById('reviews')
          );
        </script>
      </body>
    </html>`
)