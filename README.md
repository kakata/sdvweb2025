<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1HSd73tym80o3O3Xix5JbLh0QaDXHW90g

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create `.env.local` in the project root with:
   ```
   GEMINI_API_KEY=your-gemini-key
   # Optional when pointing to a remote backend
   # VITE_API_BASE_URL=https://your-domain.com
   ```
3. Run the app:
   - For static preview (without the AI endpoints) use `npm run dev`.
   - To exercise the secure AI endpoints locally, run `vercel dev` so the `/api` serverless routes are available.
# sdvweb2025
