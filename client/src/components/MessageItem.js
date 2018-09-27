import React from 'react';

const MessageItem = ({
  text,
}) => (
  <li className="item" style={{ borderBottom: 'none'}}>
    {text}
  </li>
)

export default MessageItem;