'use strict';

const axios = require('axios');
require('dotenv').config();

let token = process.env.CANVAS_TOKEN;

let courseId = process.env.CANVAS_COURSE_ID;

const duetoday = async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  const config = {
    headers: {
      // Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await axios.get(
    `https://canvas.instructure.com/api/v1/courses/${courseId}/assignments?bucket=upcoming&order_by=due_at`,
    config,
  );


  let date = new Date();
  let today = date.toISOString();

  let todayAss = response.data.filter((item) => {
    if (item.due_at.split('T')[0] === today.split('T')[0]) {
      console.log(item);
    }
  });

  // console.log(todayAss);

  let str = '`DUE TODAY`\n';
  todayAss.forEach((item) => {
    str += item.name + '\n' + item.html_url + '\n';
  });

  await say(str);
};

module.exports = duetoday;
