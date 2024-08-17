const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert");

function throw_assertion_error(actual, expected) {
    throw new assert.AssertionError({
        message: "Snapshot comparrison failed",
        actual: actual,
        expected: expected,
      });
}

assert.toMatchSnapshot = function (source, assertion) {
    // if snapshots dir not present
    if(!fs.existsSync("./snapshots")) fs.mkdirSync("./snapshots");
    // if snapshot file is non existent
    const p = path.join(__dirname, "snapshots", `${source}.node.snap`);
    if (!fs.existsSync(p)) {
        fs.writeFileSync(p, assertion.toString(), "utf8")
        return true;
    }
    // check contents
    const file = fs.readFileSync(p, 'utf8');
    if(file.toString() === assertion.toString()) {
        return true;
    }
    throw_assertion_error(assertion, file)
}