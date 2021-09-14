"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
function listen(port) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    }).on("error", (e) => {
        if (e.name === 'EADDRINUSE') {
            console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`);
            listen(port + 1);
        }
        else {
            console.log(e);
        }
        console.error(e);
    });
}
listen(port);
//# sourceMappingURL=main.js.map