'use strict';

const axios = require('axios');
require('dotenv').config();

let token = process.env.CANVAS_TOKEN;

let courseId = process.env.CANVAS_COURSE_ID;

const overdue = async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  const config = {
    headers: {
      // Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await axios.get(
    `https://canvas.instructure.com/api/v1/courses/${courseId}/assignments?bucket=overdue`,
    config,
  );

  const overdueAssignments = response.data;

  let str = '`OVERDUE ASSIGNMENTS`\n';

  if (overdueAssignments.length === 0) {
    str += ':100: Good work! Nothing overdue for you!';
  } else {
    overdueAssignments.forEach((item) => {
      str += item.name + '\n' + item.html_url + '\n';
    });
  }

  await say(str);
};

module.exports = overdue;
