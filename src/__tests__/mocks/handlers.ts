import { http } from "msw";

export const handlers = [
    http.get("/api/v1/lyrics/:id", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ lyrics: "Mocked lyrics for song with ID: " + req.params.id })
        );
    }),

    http.get("/api/v1/playlist", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, title: "Mock Song 1", artist: "Mock Artist 1", duration: 210 },
                { id: 2, title: "Mock Song 2", artist: "Mock Artist 2", duration: 255 },
            ])
        );
    }),

    http.get("/api/v1/songs/:id", (req, res, ctx) => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                cover: `https://mock.cdn/cover-${id}.jpg`,
                song: `https://mock.cdn/audio-${id}.mp3`,
            })
        );
    }),
];
