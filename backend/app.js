const datefns = require('date-fns')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router()

let parties = []
const port = 8080

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json([
      {
        "id": "1",
        "author": "John Q. Public",
        "dateCreated": "15 Dec 2022",
        "body": "# Heading\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisl dolor, vel luctus justo fermentum quis. Etiam nec risus a neque dapibus posuere vitae vel mi. Maecenas venenatis feugiat ante, id semper erat iaculis sed. Nullam egestas *lobortis placerat*. Nulla posuere felis non erat efficitur porta ac vitae felis. Integer pellentesque ligula sagittis risus semper, non malesuada augue ultricies. Vestibulum venenatis nisi nulla, sit amet luctus diam euismod vitae. Nulla id libero eget purus faucibus laoreet vel quis purus. Mauris eu dapibus quam, nec pretium eros. Aliquam varius orci quam, eu placerat ante rutrum nec. Etiam ullamcorper hendrerit pellentesque. Duis nec elit feugiat, scelerisque massa id, feugiat metus. In accumsan felis bibendum nisl tincidunt rutrum. Cras sed felis pharetra, ultrices justo id, hendrerit magna. Integer fringilla condimentum fringilla. Pellentesque accumsan in quam non tristique. Etiam facilisis est id laoreet consectetur. Phasellus in rhoncus arcu. Nulla non neque ut augue consectetur imperdiet nec sit amet neque. Aenean vitae felis mattis libero ornare ultricies in sit amet enim. Donec rutrum id dolor ac varius. In rhoncus ac ligula eu aliquet. Ut eu mauris quis diam malesuada mollis. Quisque condimentum ante sit amet nisi rutrum, at ultricies nulla tempus. Nulla sit amet augue iaculis, mollis magna nec, convallis arcu. Duis metus urna, convallis sit amet lacinia ac, consequat nec orci."
      },
      {
        "id": "2",
        "author": "Chopped Liver",
        "dateCreated": "19 Mar 2023",
        "body": "~~bone scott~~"
      },
      {
        "id": "3",
        "author": "Courage",
        "dateCreated": "12 Nov 2023",
        "body": "Did you know that [you're not perfect](https://www.youtube.com/watch?v=xFDldk9D_Qc)?"
      }
    ])
})

app.get('/healthcheck', (req, res) => {
    res.json({"heartbeat": true})
})

app.listen(port, function () {
    console.log('App listening on port ' + port + '!')
})