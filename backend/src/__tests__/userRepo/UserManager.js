// UserManager.js
import { Socket } from "socket.io";
import { addUser, createHandlers } from './QuizManager';
const ADMIN_PASSWORD = "ADMIN_PASSWORD";

export const addUserHandler = (socket) => createHandlers(socket);

export const createHandlers = (socket) => {
    socket.on("join", (data) => {
        const userId = addUser(data.roomId, data.name);
        socket.emit("init", {
            userId,
            state: getCurrentState(data.roomId)
        });
        socket.join(data.roomId);
    });

    socket.on("joinAdmin", (data) => {
        if (data.password !== ADMIN_PASSWORD) {
            return;
        }
        console.log("join admin called");

        socket.on("createQuiz", data => {
            addQuiz(data.roomId);
        });

        socket.on("createProblem", data => {
            addProblem(data.roomId, data.problem);
        });

        socket.on("next", data => {
            next(data.roomId);
        });
    });

    socket.on("submit", (data) => {
        const { userId, problemId, submission, roomId } = data;
        if (![0, 1, 2, 3].includes(submission)) {
            console.error("Invalid submission: " + submission);
            return;
        }
        submit(userId, roomId, problemId, submission);
    });
};


