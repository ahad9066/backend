// const mailService = new (require('../services/mail.service'));
// const Agenda = require('agenda');

// // const mongoConnectionString = 'mongodb+srv://admin:admin123@cluster0.mqbmnge.mongodb.net/?retryWrites=true&w=majority';

// // const agenda = new Agenda({ db: { address: mongoConnectionString } });
// const agenda = new Agenda({ mongo: null });
// agenda.mongo({ db: null });
// agenda.define('send email', { retryInterval: 60000, retryLimit: 3 }, async (job) => {
//     const { to, subject, text } = job.attrs.data;
//     console.log("job attrcs", job.attrs.data)
//     try {
//         const response = await mailService.send(job.attrs.data)
//         console.log(`Sending email to ${to} with subject: ${subject}`);
//     } catch (error) {
//         // Handle email sending failure
//         console.error('Failed to send email:', error);
//         throw error; // Rethrow the error to trigger automatic retry
//     }
// });

// agenda.on('fail', (err, job) => {
//     console.error(`Job failed with error:`, err);
// });

// // (async () => {
// //     await agenda.start();
// //     console.log('Agenda started...');
// // })();
// agenda.start().then(() => {
//     console.log('Agenda has started successfully.');
// }).catch((error) => {
//     console.error('Error starting Agenda:', error);
// });
// console.log("Exporting agenda:");
// module.exports = agenda;

