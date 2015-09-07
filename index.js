var path = require('path'),
    findRoot = require('find-root'),
    relativeRegex = /^[^.\/]/;

function caroot(caretedPath, currentPath) {
    if(caretedPath.charAt(0) === '^') {
        var filePath = caretedPath.slice(1),
            root = findRoot(currentPath),
            x = path.relative(path.dirname(currentPath), root),
            result = path.join(x, filePath);

        if(result.match(relativeRegex)){
            result = './' + result;
        }

        return result;
    }

    return caretedPath;
}

module.exports = caroot;