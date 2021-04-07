import dayjs from "dayjs";
import * as chrono from "../src";
// Router
export const router = app => {
app.get('/time', async (req, res) => {
    try {
      let text = req.query.text;
        let timeFromText = chrono.vi.parse(text, new Date());
        console.log(timeFromText);
        res.json(timeFromText);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
});
}

// Export the router
// module.exports = router;
