export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const response = await fetch("https://api.hostinger.com/reach/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACH_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        name: name || "",
        tags: ["Waitlist"]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(400).json({ error: `Hostinger Reach error: ${error}` });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}

