// QuizManager.js
let globalProblemId = 0;
let quizes = [];

export const addQuiz = (roomId) => {
    if (getQuiz(roomId)) return;
    quizes.push(createQuiz(roomId));
};

export const addProblem = (roomId, problem) => {
    const quiz = getQuiz(roomId);
    if (!quiz) return;
    const problemWithId = {
        ...problem,
        id: (globalProblemId++).toString(),
        startTime: Date.now(),
        submissions: []
    };
    quiz.problems.push(problemWithId);
};

export const startQuiz = (roomId) => {
    const quiz = getQuiz(roomId);
    if (!quiz) return;
    quiz.start();
};

export const next = (roomId) => {
    const quiz = getQuiz(roomId);
    if (!quiz) return;
    quiz.next();
};

export const addUser = (roomId, name) => {
    const quiz = getQuiz(roomId);
    return quiz ? quiz.addUser(name) : null;
};

export const submit = (userId, roomId, problemId, submission) => {
    const quiz = getQuiz(roomId);
    if (quiz) quiz.submit(userId, roomId, problemId, submission);
};

export const getCurrentState = (roomId) => {
    const quiz = getQuiz(roomId);
    return quiz ? quiz.getCurrentState() : null;
};

const getQuiz = (roomId) => quizes.find(quiz => quiz.roomId === roomId) || null;

const createQuiz = (roomId) => ({
    roomId,
    problems: [],
    users: [],
    currentProblemIndex: 0,
    start() {
        // Start the quiz logic
    },
    next() {
        this.currentProblemIndex += 1;
    },
    addUser(name) {
        const userId = `user-${this.users.length + 1}`;
        this.users.push({ userId, name });
        return userId;
    },
    submit(userId, roomId, problemId, submission) {
        const problem = this.problems.find(p => p.id === problemId);
        if (problem) {
            problem.submissions.push({ userId, submission });
        }
    },
    getCurrentState() {
        return {
            problems: this.problems,
            currentProblemIndex: this.currentProblemIndex
        };
    }
});
