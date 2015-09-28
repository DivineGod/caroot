var path = require('path'),
    findRoot = require('find-root'),
    relativeRegex = /^[^.\/]/;

function caroot(caretedPath, currentPath, rootSubDirectory) {
    if(caretedPath.charAt(0) === '^') {
        var filePath = caretedPath.slice(1),
            rootBase = findRoot(currentPath),
            root = rootSubDirectory ? path.join(rootBase, rootSubDirectory) : rootBase,
            relativePath = path.relative(path.dirname(currentPath), root),
            result = path.join(relativePath, filePath);

        if(result.match(relativeRegex)){
            result = './' + result;
        }

        return result;
    }

    return caretedPath;
}

module.exports = caroot;