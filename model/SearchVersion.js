const mongoose = require("mongoose");
const VersionSchema = new mongoose.Schema({
    version: {
        type: String
    }
});
const Version = mongoose.model("elasticsearch_version", VersionSchema);
module.exports = Version;
