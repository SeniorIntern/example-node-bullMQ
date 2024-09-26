import { Queue, RedisOptions } from "bullmq";

type EmailJob = {
  email: string;
  subject: string;
  body: string;
};

// Redis connection options
const connection: RedisOptions = {
  host: "127.0.0.1", // Redis host
  port: 6379, // Redis port
};

const notificationQueue = new Queue<EmailJob>("email-queue", {
  connection,
});

async function init() {
  // Add a new job to the queue.
  const res = await notificationQueue.add("email to nikhil", {
    email: "nikil@gmail.com",
    subject: "Learning queue",
    body: "Hey Nikhil, Welcome!!!",
  });
  console.log("job added to queue. Queue id===", res.id);
}
init();
