export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      res.status(400).json({ error: "Email is required" });
      return;
    }

    const response = await fetch("https://api.hostinger.com/reach/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${process.env.REACH_API_KEY}`
      },
      body: JSON.stringify({
        email,
        attributes: { name },
        tags: ["Waitlist"]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      res.status(500).json({ error: errText });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
