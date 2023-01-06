// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
type Data = {
  status: number;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    to: "ilya@poem.co.nz",
    from: "ilya@poem.co.nz",
    subject: "New form submission",
    html: `From: <strong>${req.body.email}</strong><br>${req.body.msg}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).json({ status: 200, message: "Form submitted." });
}
