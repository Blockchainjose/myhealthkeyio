export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          custom_fields: [
            {
              name: "full_name",
              value: name || "",
            },
          ],
          send_welcome_email: false,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Beehiiv API Error:", data);
      return res.status(500).json({ error: "Beehiiv signup failed", details: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

