module.exports = {
    preset: '@shelf/jest-mongodb',
    testEnvironment: 'node',
    bail: true,
    snapshotSerializers: ["enzyme-to-json/serializer"]
};
