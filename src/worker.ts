import { RedisOptions, Worker } from "bullmq";

const sendEmail = () =>
  new Promise<void>((res, _) => setTimeout(() => res(), 5000));

// Redis connection options
const connection: RedisOptions = {
  host: "127.0.0.1", // Redis host
  port: 6379, // Redis port
};

new Worker(
  "email-queue",
  async (job) => {
    console.log("Message record id", job.id);
    console.log(`Processing message: ${job.name}...`);

    // @ts-ignore
    const { email } = job.data;
    console.log("Sending email to:", email);

    // simulate async task (sending mail)
    await sendEmail();

    console.log("Email sent");
  },
  { connection },
);
