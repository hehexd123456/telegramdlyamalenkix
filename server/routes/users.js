const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/all', async (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;



// export default class MessagesList extends PureComponent {
//   renderMessages() {
//     const { conversation } = this.props;

//     if (conversation._id) {
//       return (
//         <>
//           {conversation.messages.map(message => (
//             <Message 
//               key={ message._id }
//               text={ message.text }
//             />
//           ))}
//           <MessageSendBoxContainer />
//         </>
//       )
//     }

//     return (
//       <span className="inform-message">
//         Please select any chat to start messaging
//       </span>
//     )
//   }

//   render() {
//     return (
//       <Col md={12} className={conversation._id ? "messages-list" : "not-selected-conversation"}>
//         { this.renderMessages() }
//       </Col>
//     )
//   }
// }