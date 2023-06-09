// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('video-streaming');

// Create a new document in the collection.
db.getCollection('videos').insertOne({
    "videoPath" : "SampleVideo_1280x720_1mb.mp4"
});
