// resend.d.ts
declare module 'resend' {
    export default class Resend {
      constructor(apiKey: string);
      sendEmail(options: {
        from: string;
        to: string;
        subject: string;
        html: string;
      }): Promise<void>;
    }
  }
  