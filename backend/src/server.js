import express from 'express';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }); 
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});