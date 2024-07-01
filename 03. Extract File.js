function extractFile(input) {
    let lastSlashIndex = input.lastIndexOf('\\');
    let lastFullStopIndex = input.lastIndexOf('.');
    let fileName = input.substring(lastSlashIndex + 1, lastFullStopIndex);
    let extension = input.substring(lastFullStopIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');