import client from '../../utils/storybook-client';

export async function fetchEvents() {
    return  await client.get(`cdn/stories`, {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        start_with: "events/"
    })
}