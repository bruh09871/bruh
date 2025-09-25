import axios from "axios";

export default async function handler(req, res) {
  try {
    // Uses your API key stored in Vercel environment variables
    const response = await axios.post(
      "https://engine.hyperbeam.com/v0/vm",
      {},
      { headers: { Authorization: `Bearer ${process.env.HB_API_KEY}` } }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Hyperbeam VM" });
  }
}
