// resend.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'resend' {
  export const Resend: any;  // Force TypeScript to accept named export
}
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